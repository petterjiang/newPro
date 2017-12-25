var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:["babel-polyfill",path.resolve(__dirname, 'app/index.jsx')],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    resolve:{
        extensions:['', '.js','.jsx']
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.less$/, loader: 'style!css!postcss!less' },
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },

    eslint: {
        configFile: '.eslintrc' // Rules for eslint
    },

    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            // favicon: __dirname+'/app/resource/images/favicon.ico',
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 可在业务 js 代码中使用 __BUILD_ENV__环境变量 判断是否是dev ,uat,production模式
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('dev')
            },
            __BUILD_ENV__: JSON.stringify('dev')
        }),
    ],

    devServer: {
        proxy: {
          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
          '/api': {
            //target: 'http://10.10.1.56:8081/mockjs/25',
            target: 'http://120.76.101.96:8080/jee',
            changeOrigin: true,
            secure: false
          },
            '/a': {
                target: 'http://120.76.101.96:8080/jee',
                changeOrigin: true,
                secure: false
            },
            '/jee': {
                target: 'http://120.76.101.96:8080',
                changeOrigin: true,
                secure: false
            }
        },
        port: 3000,
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
};
