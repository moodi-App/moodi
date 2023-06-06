const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'client'),
      publicPath : '/',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/client/index.html",
        title: 'moodi'
    })
  ],
  
};