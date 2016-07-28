(function(){
	//加载模块CSS
	require('./dialog.scss');
	//加载模板
	var html=require('./dialog.html');
	
	module.exports=function(text){
		$('body').append(html);//将代码片段加入到body中
		$('.dialog>span').last().text(text);
	};
	
})();

