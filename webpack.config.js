/**
 * Created by Prateek on 4/17/2017.
 */
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: path.resolve(__dirname, "src/app/index.js"),
    output: {
        path: path.resolve(__dirname, "dist/app"),
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules:[
            {
                test: /\.js?/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['react','es2015','stage-2']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            /*outputPath: '/',*/
                            /*publicPath: 'img/'*/
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}