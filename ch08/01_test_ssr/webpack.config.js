const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'test-ssr',
  mode: 'production',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
