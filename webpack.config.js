var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: PATHS.build,
        port: 8080
    },
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundle.js',
        sourceMapFilename: "[name].js.map"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: PATHS.app,
                exclude: /node_modules/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
                test: /\.js[x]?$/,
                include: PATHS.app,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};
