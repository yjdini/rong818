define(['app'],function(app){
	var View = {};
	return View.initialize = function(){
		$.fn.serializeObject = function(){
		    var o = {};
		    var a = this.serializeArray();
		    $.each(a, function() {
		        if (o[this.name] !== undefined) {
		            if (!o[this.name].push) {
		                o[this.name] = [o[this.name]];
		            }
		            o[this.name].push(this.value || '');
		        } else {
		            o[this.name] = this.value || '';
		        }
		    });
		    return o;
		}
		var telr = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		$('.submit-btn').click(function(){
			if(!telr.test($('input[name=phone]').val())){
				app.toast("请输入正确的手机号格式");
				return;
			}
			if($('input[name=valicode]').val().trim() == ""){
				app.toast("请输入验证码");
				return;
			}
			$.ajax({
				type:"post",
				url:'/api/addcredit',
				contentType:'application/json',
				async:true,
				data: JSON.stringify($('form').serializeObject()),
				success:function(e){
					if(e.status == "error"){
						app.toast(e.message);
						return;
					}
					window.location.href="successDai.html"
				}
			});
		});
		
		$('.js-send-btn').click(function(){
			if($('.js-send-btn').hasClass("unabled"))
				return;
			if(!telr.test($('input[name=phone]').val())){
				app.toast("请输入正确的手机号格式");
				return;
			}
			$.ajax({
				type:"get",
				url:'/api/sendcode/'+$('input[name=phone]').val(),
				async:true,
				success:function(e){
					if(e.status == "error"){
						app.toast(e.message);
						return;
					}
					View.df(60);
					$('.js-send-btn').addClass("unabled");
				}
			});
		})
		
		$('#numselect').change(function(){
			$('input[name=num]').val($('#numselect').val()*1000+"元");
		});
		$('#duringselect').change(function(){
			var d = $('#duringselect').val();
			if(d < 4){
				d = d+"周";
			} else{
				var m = Math.floor(d/4);
				var y = Math.floor(m/12);
				m = m - y*12;
				d = y+"年 "+m+"月";
			}
			$('input[name=during]').val(d);
		});
		$('.js-input-2').click(function(e){
			var name = e.target.name;
			if(e.target.checked == true){
				$('input[name='+name+']').removeAttr("checked");
				e.target.checked = true;
			} else {
				e.target.checked = false;
			}
		});
		
		$('.js-input-city').click(function(e){
			if($(e.target).hasClass('none-border')){
				$('.js-input-city').addClass('none-border');
				$(e.target).removeClass('none-border')
				$('input[name=city]').val(e.target.dataset.v);
				
			}else{
				$(e.target).addClass('none-border');
				$('input[name=city]').val("");
			}
		})
		$('.js-input-age').click(function(e){
			if($(e.target).hasClass('none-border')){
				$('.js-input-age').addClass('none-border');
				$(e.target).removeClass('none-border')
				$('input[name=age]').val(e.target.dataset.v);
				
			}else{
				$(e.target).addClass('none-border');
				$('input[name=age]').val("");
			}
		})
		$('.js-input-career').click(function(e){
			if($(e.target).hasClass('none-border')){
				$('.js-input-career').addClass('none-border');
				$(e.target).removeClass('none-border')
				$('input[name=career]').val(e.target.dataset.v);
				
			}else{
				$(e.target).addClass('none-border');
				$('input[name=career]').val("");
			}
		})
	} ,View.df = function(i){
		if (i == 0) {
			$('.js-send-btn').html("发送验证码");
			$('.js-send-btn').removeClass("unabled");
			return;
		} 
		$('.js-send-btn').html("重新发送("+i+"s)");
		i --;
		setTimeout(function(){
			View.df(i);
		},1000)
	}, View
});