const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// PostCSS support
const postcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

// Constants
const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const STYLE = path.join(__dirname, 'app/style.css');
const PUBLIC = path.join(__dirname, 'app/public');
const TEMPLATE = path.join(__dirname, 'app/templates/index.html');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
    // Paths and extensions
    entry: {
        app: APP
    },
    output: {
        path: BUILD,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css','.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: APP
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader', 'postcss'],
                include: [APP, NODE_MODULES]
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                loader: 'json',
                include: [APP, NODE_MODULES]
            }
        ]
    },
    // Configure PostCSS plugins
    // postcss: function processPostcss(webpack) {
    //     return [
    //         postcssImport({
    //             addDependencyTo: webpack
    //         }),
    //         precss,
    //         autoprefixer({browsers: ['last 2 versions']})
    //     ];
    // },
    // Source maps used for debugging information
    devtool: 'eval-source-map',
    // webpack-dev-server configuration
    devServer: {
        historyApiFallback: true,
        hot: false,  // enables reloading when page changes
        stats: 'errors-only',
        host: HOST,
        port: PORT
    },
    plugins: [
        // Required to inject NODE_ENV within React app
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new CopyWebpackPlugin([
            {from: PUBLIC, to: BUILD}
        ],
            {
                ignore: [
                    '.DS_Store'
                ]
            }
        ),
        new HtmlWebpackPlugin({
            template: TEMPLATE,
            inject: 'body' // JS placed at bottom of body element
        })
    ]
};