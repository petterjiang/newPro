var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ["babel-polyfill",path.resolve(__dirname, 'app/index.jsx')],
    // 将 第三方依赖 单独打包
    vendor: [
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch', 
      'immutable'
    ]
  },
  output: {
    path: __dirname + "/build-uat",
    filename: "[name]-uat.[chunkhash:8].js",
    publicPath: './'
  },

  resolve:{
      extensions:['', '.js','.jsx']
  },

  module: {
    loaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=images/[name].[hash:8].[ext]&publicPath=./' },
        { test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?name=fonts/[name].[hash:8].[ext]'}
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin('js'),

    // html 模板插件
    new HtmlWebpackPlugin({
        favicon: __dirname+'/app/resource/images/favicon.ico',
        template: __dirname + '/app/index.tmpl.html'
    }),
      // 可在业务 js 代码中使用 __BUILD_ENV__环境变量 判断是否是dev ,uat,production模式
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
        __BUILD_ENV__: JSON.stringify('uat')
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('[name]-uat.[chunkhash:8].css'),
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name]-uat.[chunkhash:8].js'
    })

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    //new webpack.DefinePlugin({
    //  __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    //})
  ]
}