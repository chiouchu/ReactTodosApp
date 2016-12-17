const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let webpackConfig = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.[hash].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: 'eslint',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.css", { allChunks: true })
    ],
    resolve: {
        extensions: ['', '.js']
    }
};

// Plugins for different environment
if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins.push(
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': '"production"'}
        })
    );
} else {
    webpackConfig.plugins.push(
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': '"development"'}
        })
    );
}

module.exports = webpackConfig;
