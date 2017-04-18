/**
 * Created by Prateek on 4/17/2017.
 */
var webpack = require('webpack');
var path = require('path');

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
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    }
}