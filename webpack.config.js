var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app/index'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
};
