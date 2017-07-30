"use strict";

function getView() {
    var e = location.pathname.match(/\/(\w+)\.html/i);
    return currView = e ? e[1] : currView, "./views/" + currView
}
require.config({
    baseUrl: "../",
    paths: {
        mui: "js/mui",
        _: "js/lodash",
        app: "js/app"
    }
});
var currView = "index";
require(["mui", "app", getView()], function(mui, app, View) {
    function n() {
        var i = mui.targets.tab,
            n = i && i.dataset.view;
        if (n != currView) {
            "index" == n && mui.os.plus && (n = plus.runtime.appid);
            var a = {
                url: i.href,
                id: n,
                show: {
                    aniShow: "none",
                    duration: 0
                }
            };
            "personalCenter" == n && (a.needLogin = !0, a.fromUrl = "personalCenter.html"), app.openWindow(a)
        }
    }
    mui.init({
        swipeBack: !0
    });
    var a = document.querySelector("#js-back");
    a && a.addEventListener("click", function(n) {
        n.preventDefault(), mui.isFunction(View.back) ? View.back(app.back) : app.back(View.back)
    });
    var r = document.querySelector(".mui-bar-tab");
    if (r && mui(r).on("tap", "a", n), mui.os.plus && View.events && (mui("body").on("click", "a", function(e) {
            e.preventDefault()
        }), View.events()), mui.os.plus && (plus.webview.currentWebview().setStyle({
            scrollIndicator: "none"
        }), plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque"), plus.navigator.setStatusBarBackground("#33C2D7"), document.addEventListener("netchange", function() {
            var e = plus.networkinfo.getCurrentType();
            2 > e && this.network > 1 && plus.nativeUI.toast("您的网络已断开", void 0, "趣找钱"), 3 == this.network && e > 3 && plus.nativeUI.toast("您网络已从wifi切换到蜂窝网络，浏览会产生流量", void 0, "趣找钱", "我知道了")
        })), mui.os.android && "index" == currView) {
        var s = null;
        mui.back = function() {
            s ? (new Date).getTime() - s < 1e3 && plus.runtime.quit() : (s = (new Date).getTime(), mui.toast("再按一次退出应用"), setTimeout(function() {
                s = null
            }, 1e3))
        }
    	}
    var gallery = mui('.slide-gallery');
    setTimeout(function(){
    		gallery.slider({
		  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
		});
	},5000)
	
	
    View.initialize()
});



