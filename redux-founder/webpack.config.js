const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, './lib/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    // alias: {
    //   '~': path.resolve(__dirname, 'src/'),
    //   '@': path.resolve(__dirname, '/'),
    // },
  },
  devServer: {
    // port: 9995,
    historyApiFallback: true,
    contentBase: './dist',
  },
};

module.exports = config;
