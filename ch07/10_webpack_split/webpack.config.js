const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    page3: './src/index3.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
  mode: 'production'
};

/* module.exports = {
  entry: {
    page1: './src/index1.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          name: 'vendors',
        },
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 2,
          name: 'react.bundle',
          minSize: 100,
        },
        default: {
          minChunks: 1,
          priority: 1,
          name: 'default',
        },
      },
    },
  },
};
*/