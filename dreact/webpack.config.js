var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
    context: __dirname,
    entry: './assets/js/index.js',
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin('styles.css')
    ],

    module: {
        loaders: [
            {   test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    combineLoaders([{
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }])
            )
        }]
    }
};