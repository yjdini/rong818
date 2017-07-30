define(['app','list', '_' ],function(app, list, _){
	var View = list;
		/*
		 * custom configure
		 * @module 1
		 */
	var	v = {
			title: '申请列表',
			E:[[1,'电话'],[1,'数额'],[1,'期限'],[1,'城市'],[1,'职业']
			,[1,'年龄'],[1,'是否逾期'],[1,'缴保险'],[1,'还车贷'],[1,'有房产'],[1,'缴公积金'],[1,'申请时间']],
			searchUrl : '/api/creditlist',
			searchConfigureId:"searchConfigure",
			listTmpId: 'creditlist',
			listFuc : {
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
