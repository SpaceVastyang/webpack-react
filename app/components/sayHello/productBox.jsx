// var React = require('react');

//引入组件样式表
require('./sassTest.scss');
//定义组件
var ProductBox = React.createClass({
  render: function () {
    return (
      <div className="productBox">
      	<h1>Hello React&webpack!</h1>
      	<input type="text" id="input"/>
      	<button id="push">发表</button>
      </div>
    );
  }
});

$(function(){
	
	$("#push").on("click", function(){
		var inputVal = $("#input").val();
		alert(inputVal);
	})
})


module.exports = ProductBox;