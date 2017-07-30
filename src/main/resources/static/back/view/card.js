define(['app','list', '_' ],function(app, list, _){
	var View = list;
		/*
		 * custom configure
		 * @module 1
		 */
	var	v = {
			title: '申请列表',
			E:[[1,'电话'],[1,'卡类型'],[1,'已有卡'],[1,'使用最久的卡'],[1,'申请时间']],
			searchUrl : '/api/cardlist',
			searchConfigureId:"searchConfigure",
			listTmpId: 'cardlist',
			listFuc : {
				getCardName : function(ids){
					if(!ids || ids == 0)
						return "";
					ids = ids.split('[');
					ids = ids[1] ? ids[1] : ids[0];
					ids = ids.split(']');
					ids = ids[0];
					var names = ["","中国银行","农业银行","工商银行","建设银行"
							,"平安银行","招商银行","交通银行","浦发银行"
							,"光大银行","广发银行","兴业银行","中信银行"
							,"上海银行","华夏银行","汇丰银行","武汉农商"];
					var id = ids.split(',');
					for(var i = 0; i < id.length; i ++){
						id[i] = names[id[i].trim()];
					}
					return id.join("<br>");
				}
			}
		};
	
	return View.init = function(){
		View = jQuery.extend(View,v);
		View.searchConfigure = View.getSearchConfigure() || app.parseForm('searchConfigure');
		View.loadSearchConfigure(View.searchConfigure);
		View.bindEvt();
	}, View.loadSearchConfigure = function(config){//init search form by search config
		config = JSON.parse(config);
		$('input[name=currentPage]').val(config.currentPage);
	}, View.criteriaChange = function() {//callback that when the form value has been changed
		$('input[name=currentPage]').val(0);
		View.search(true);
	},View.bindEvt = function(){
		
	},View.searchCallback = function(){
	}, View
});
