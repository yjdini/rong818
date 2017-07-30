define(['app' ],function(app){
	var View = {};
	return View.initialize = function(){
		var url = window.location.href;
		var id = url.split("id=")[1];
		id = id? id:"";
		id = id.split('&')[0];
		$('input[name=card]').val(id);
		
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
				url:'/api/addcard',
				contentType:'application/json',
				async:true,
				data: JSON.stringify($('form').serializeObject()),
				success:function(e){
					if(e.status == "error"){
						app.toast(e.message);
						return;
					}
					window.location.href="success.html"
				}
			});
		})
		
		$('.js-input').click(function(e){
			if(e.target.tagName == "DIV") {
				var check = $(e.target).children();
				if(check[0].checked){
					check.removeAttr('checked');
				} else{
					check[0].checked = true;
				}
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
	}, View;
});