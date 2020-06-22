const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(config, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // inject style into dom .
          'css-loader', // Turns css to common js script
          'sass-loader', // Turn sass into css
        ],
      },
    ],
  },
});
