var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
   module: {
        loaders: [
            { 
                test: /\.css$/, 
                include: PATHS.app, 
                loader: 'style-loader!css-loader!sass-loader' 
            },
            { 
                test: /\.js[x]?$/, 
                include: PATHS.app, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            },
        ]
    },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
};
