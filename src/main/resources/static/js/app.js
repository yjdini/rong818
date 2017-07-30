define(["mui"], function(e) {
    var t = window.navigator.userAgent,
        n = {
            baseUrl: "http://101.201.221.249:8080",
            rPhone: /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
            rEmail: /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            isWeiXin: /MicroMessenger/i.test(t),
            isAndroid: /Android/i.test(t)
        };
    return n.getFormData = function(id){
    		var o = {};
	    var a = $('#id').serializeArray();
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
    }, n.newline2br = function(e) {
        return (e || "").replace(/\r\n|\n/g, "<br>")
    }, n.remove = function(select,classname){
    		var a = document.getElementsByClassName(select);
    		for(var i = 0; i < a.length; i ++){
    			a[i].classList.remove(classname);
    		}
    }, n.html2dom = function(e) {
        var t = document.createDocumentFragment(),
            n = document.createElement("div");
        n.innerHTML = e;
        for (var o = n.children; o.length > 0;) t.appendChild(o[0]);
        return t
    }, n.setUser = function(e, t) {
        var n = {
            phone: e,
            password: window.btoa ? btoa(t) : t,
            timestamp: +new Date
        };
        localStorage.setItem("Q-USER", JSON.stringify(n))
    }, n.getUser = function() {
        return JSON.parse(localStorage.getItem("Q-USER")) || {}
    }, n.setPersonal = function(e) {
        localStorage.setItem("Q-PERSONALSTORE", JSON.stringify(e))
    }, n.getPersonal = function() {
        var e = JSON.parse(localStorage.getItem("Q-PERSONALSTORE")) || {},
            t = this.getUser();
        return e.phone == t.phone ? e : void 0
    }, n.isLogin = function() {
        var e = n.getUser();
        return e.phone && e.password && +new Date - e.timestamp < 18e5
    }, n.logout = function() {
        var t = n.getUser();
        delete t.password, localStorage.setItem("Q-USER", JSON.stringify(t)), n.clearCache(), e.ajax({
            type: "get",
            url: n.getUrl("/plannerLoginAction!exit.action"),
            async: !0,
            success: function() {}
        })
    },n.addImg = function(inputId){
    	document.getElementById(inputId).onchange = function(){
    		var fd = new FormData();
    		fd.append('image',document.getElementById(inputId).files[0]);
    		var type = document.getElementById(inputId).value.split('.');
    		type = type.length > 1 ? '.'+type[type.length - 1] : '';
    		mui.ajax({
    			url: '/imageUploadAction!infoPic.action'+'?type='+type+'&n='+inputId,
    			type: 'post',
    			processData: false,
    			contentType: false,
    			data: fd,
    			success: function(d) {
    				document.getElementById('img-'+inputId).src = "/servlet/ShowImgServlet?imgFile="+d.trim()
    			}
    		})
    	}
    }, n.unlogined = function(comefrom){
    	comefrom&&localStorage.setItem("Q-COMEFROM", comefrom);
    	mui.toast("检测到您未登录，自动为您跳转到登录界面");
		setTimeout(function(){n.openSignPage()},2000)
    }, n.toast = function(m){
    		mui.toast(m);
    },n.clearCache = function() {
        for (var e in localStorage) "Q-USER" != e && localStorage.removeItem(e)
    }, n.getUrl = function(e) {
        return n.baseUrl + e
    }, n.scrollBottom = function(){
    	var a = document.getElementById('container');
    	a.scrollTop = a.scrollHeight;
    }, n.dateFormat = function(e, t) {
        void 0 === t && (t = e, e = new Date);
        var n = {
            M: e.getMonth() + 1,
            d: e.getDate(),
            h: e.getHours(),
            m: e.getMinutes(),
            s: e.getSeconds(),
            q: Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        return t = t.replace(/([yMdhmsqS])+/g, function(t, o) {
            var r = n[o];
            return void 0 !== r ? (t.length > 1 && (r = "0" + r, r = r.substr(r.length - 2)), r) : "y" === o ? (e.getFullYear() + "").substr(4 - t.length) : t
        })
    }, n.openWindow = function(t) {
        t.needLogin ? n.isLogin() ? e.os.plus ? e.openWindow(t) : location.href = t.url : n.openSignPage(t.fromUrl) : e.os.plus ? e.openWindow(t) : location.href = t.url
    }, n.openProfile = function(){
    	n.openWindow({'url':'profile.html'})
    }, n.openSignPage = function(t) {
    	n.openWindow({'url':'login.html'})
    }, n.back = function(t, n) {
        if (e.os.plus) {
            if (n) {
                var o = plus.webview.currentWebview(),
                    r = o.opener();
                r && r.reload()
            }
            e.back()
        } else t ? location.href = t : window.history.length > 1 && window.history.back()
    }, n
});
