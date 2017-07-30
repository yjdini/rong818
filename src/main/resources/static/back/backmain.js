"use strict";
require.config({
    baseUrl: "../",
    paths: {
        _: "libs/lodash",
        app: "libs/app",
        pagination: "libs/pagination",
        list: "libs/list",
        detail: "libs/detail",
    }
});

var urlInfo;
function bindEvt(){
	$('#btn-logout').click(function(){
		require(['app'], function(app){
			app.logout();
			window.location.href = "login.html";
		});
	})
	
	$('.js-menu').click(function(e){
		var ea = e.target;
		while(ea.tagName != "LI")
			ea = ea.parentElement;
		if (ea.id == "sublist") {
			$(ea).toggleClass("active")
		} else {
			if ( !$(ea).hasClass("choose") ) {
				loadView(ea.id);
			}
		}
	});
	
}
function showView(view, subId) {
	var explict = '?t='+new Date().getTime();	
	$.ajax({
		type: "get",
		url: "./template/"+view+".html",
		async: true,
		success: function(d){
			$('#content').html(d);
			require(['app', './view/'+view+'.js'+explict], function(app, View) {
				View.initialize(subId);
				app.setUrlInfo({"view":view});
				urlInfo = app.getUrlInfo();
			})
		}
	});
}


function loadView(view) {
	$('.li-entry').removeClass("choose");
	
	if (view == "card") {
		$('#card').addClass("choose");
	} else if (view == "credit") {
		$('#credit').addClass("choose");
	} 
	showView(view)
}

function initContent() {
	loadView(urlInfo.view);
}
$(function(){
	require(['app'], function(app){
//		if(!localStorage.getItem('userinfo') || 
//				!JSON.parse(localStorage.getItem('userinfo')).name){
//			app.showUnlogin();
//			return;
//		}
		urlInfo = app.getUrlInfo();
		bindEvt();
		initContent();
	})
});

