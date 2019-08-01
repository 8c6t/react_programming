const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const getConfig = (isServer) => ({
  name: 'test-ssr',
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: isServer
    ? { server: './src/server' }
    : { main: './src/index' },
  output: {
    filename: isServer ? '[name].bundle.js' : '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  target: isServer ? 'node' : 'web',
  externals: isServer ? [nodeExternals()] : [],
  node: {
    __dirname: false,
  },
  optimization: isServer
    ? {
        splitChunks: false,
        minimize: false,
      }
    : undefined,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(
              __dirname,
              isServer ? '.babelrc.server.js' : '.babelrc.client.js',
            ),
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            emitFile: isServer ? false : true,
          },
        },
      },
    ],
  },
  plugins: isServer
    ? []
    : [
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: ['**/*', '!server.bundle.js']
        }),
        new HtmlWebpackPlugin({
          template: './template/index.html',
        }),
      ],
});

module.exports = [getConfig(false), getConfig(true)];
