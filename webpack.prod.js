const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // remove old hash file when some content change.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into file .
          'css-loader', // Turns css to common js script
          'sass-loader', // Turn sass into css
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new CleanWebpackPlugin(),
  ],
});
