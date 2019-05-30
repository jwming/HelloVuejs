// webpack2中文教程：http://www.jqhtml.com/7626.html

var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/startup.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader?extractCSS=true' },
            { test: /\.js$/, loader: 'babel-loader?presets[]=es2015', exclude: /node_modules/ },
            { test: /\.css$/, use: extractTextWebpackPlugin.extract(['css-loader']) },
            { test: /\.scss$/, use: extractTextWebpackPlugin.extract(['sass-loader']) },
            { test: /\.(png)|(jpg)|(gif)|(svg)|(woff)|(woff2)|(eot)|(ttf)$/, loader: 'url-loader?limit=10240&outputPath=assets/&name=[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        // 热更新
        // new webpack.HotModuleReplacementPlugin(),
        
        // 分离node_modules下第三方库的js代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') != -1;
            }
        }),
        
        // 分离webpack runtime的js代码, 禁用该插件时生成的代码包含在第三库的代码中
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }),
        
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
        
        new extractTextWebpackPlugin('[name].css')        
    ],

    // webpack-dev-server
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     port: 8082,
    //     //hot: true,
    //     inline: true
    // }
}