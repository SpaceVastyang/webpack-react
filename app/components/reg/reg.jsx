require('./reg.scss');
//内容外面不加div会报错
var RegComponent = React.createClass({
	render: function(){
		return (
			<div className="regForm">
				<p><span>用户名:</span><input type="text" placeholder="请输入用户名"/></p>
				<p><span>密码:</span><input type="passwoed" placeholder="请输入用户名"/></p>
				<p><span></span><button>立即注册</button><button>取消</button></p>
			</div>
		)
	}
});

module.exports = RegComponent;