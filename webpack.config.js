var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
    	mian: path.resolve(__dirname, './app/main.js'),
    	vendor: ['react','react-dom','jquery'],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: "/build/",
        filename: 'js/[name].js',
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            //编译reactjsx语法，如果是es6还需要配置query: {presets: ['react','es2015']}
            query: {
                presets: ['react']//react的JSX编译成js
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css") 
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
        }, {
        	test: /\.scss$/,
        	loader: 'style!css!sass'       
        },{
            test: /\.html$/, loader: "html" 
        }]
    },
    //resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
      	//这个插件可以使jquery变成全局变量，不用在自己文件require('jquery')了
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        }),

        //这是第三方库打包生成的文件
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
       	//压缩js代码
        new webpack.DefinePlugin({//删除警告
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        	except: ['$super', '$', 'exports', 'require']	//排除关键字
        }),
        new ExtractTextPlugin("css/[name].css"),	//单独使用style标签加载css并设置其路径
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
    		favicon:'./app/img/favicon.ico', //favicon路径
			filename:'index.html',	//生成的html存放路径，相对于 path
			template:'./app/view/index.html',	//html模板路径
			inject:true,	//允许插件修改哪些内容，包括head与body
			hash:true,	//为静态资源生成hash值
			minify:{	//压缩HTML文件
				removeComments:true,	//移除HTML中的注释
				collapseWhitespace:true	//删除空白符与换行符
			}
		})
    ]
};
