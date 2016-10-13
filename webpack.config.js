var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, 'app/index'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        //loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap&outputStyle=compressed')
        loader: ExtractTextPlugin.extract('css?sourceMap&!sass?sourceMap')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks: true
    }),
    new Dotenv()
  ],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  node: {
    net: "empty",
    tls: "empty",
    fs: "empty"
  }
};
