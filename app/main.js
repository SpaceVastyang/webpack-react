// var React = require('react');
// var ReactDOM = require('react-dom');
// require('./components/product.css');
// require('./components/test.less');

require("./css/style.css");



var AppComponent = require('./components/sayHello/productBox.jsx');
ReactDOM.render(
	<AppComponent />, 
	document.getElementById('content')
);

//注册组件
var RegComponent = require('./components/reg/reg.jsx');
ReactDOM.render(
	<RegComponent />, 
	document.getElementById('reg')
);

//增加事件
$('#btn').click(function() {
    require.ensure(['./components/dialog/dialog.js'], function(require) { //按需加载
        var Dialog = require('./components/dialog/dialog.js');
        new Dialog(new Date());
    });
});

console.info("in")
