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
            // { test: /\.scss$/, use: extractTextWebpackPlugin.extract(['sass-loader']) },
            { test: /\.(png)|(jpg)|(gif)|(svg)|(woff)|(woff2)|(eot)|(ttf)$/, loader: 'url-loader?limit=10240&outputPath=assets/&name=[name].[ext]' }
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //      $: 'jquery',
        //      jQuery: 'jquery'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') != -1;
            }
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
        new extractTextWebpackPlugin('[name].css')
    ]
}
