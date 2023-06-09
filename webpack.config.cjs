const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/client/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: env.NODE_ENV,
    
    devServer: {
      port: 8080,
      static: {
        directory: path.resolve(__dirname, 'client'),
        publicPath : '/',
      },
      proxy: {
        '/api': {
            target: 'http://localhost:3000',
            secure: false,
        },
      }

    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./src/client/index.html",
          title: 'moodi'
      })
    ],
  }
};
