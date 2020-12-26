"use strict";
let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
let configuration = require("./configuration.json");
let TerserPlugin = require("terser-webpack-plugin");

let version = (new Date()).getTime();

module.exports = {
	entry: {
       'vendor.main': [
           'react',
           'react-dom',
           'react-router-dom',
           'flux'
       ],
       'main': './app/index.jsx'
    },
    mode: process.env.NODE_ENV,
    devtool: process.env.NODE_ENV == 'development' ? 'source-map' : false,
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: configuration.StaticFilesBaseUrl.replace(/\/$/, ""),
        filename: '[name].[hash].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /(\.m?js$|\.m?jsx$)/,
                exclude: /(node_modules|public)/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                      comments: false,
                    },
                  }
            })
        ]
    },
    plugins: [
		new HtmlWebpackPlugin({
		    title: 'Flight Booking',
            template: './app/index.html',
            filename: './index.html',
            staticFilesBaseUrl: configuration.StaticFilesBaseUrl.replace(/\/$/, ""),
            version: version,
            APP_CONFIGURATION: JSON.stringify(configuration)
        }),
        new CleanWebpackPlugin()
    ]
};