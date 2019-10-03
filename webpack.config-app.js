const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const path = require('path');
const webpack = require('webpack');

const BUILD_FOLDER = "dist/"

module.exports = {
  context: path.resolve(__dirname, "test"),
  entry: './App.js',
  output: {
    path: path.resolve(__dirname, BUILD_FOLDER),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
    }),
    // new CopyWebpackPlugin([
    //   {from: '*.html'},
    //   {from: 'icon.png'}, 
    // ]),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })   
  ]
}
