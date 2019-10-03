const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const path = require('path');
const webpack = require('webpack');

const BUILD_FOLDER = "lib/"

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: './index.js',
  externals: {
    react: "react",
  },
  output: {
    path: path.resolve(__dirname, BUILD_FOLDER),
    filename: 'index.js',
    library: "react-xml-view",
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
    // new CopyWebpackPlugin([
    //   {from: '*.html'},
    //   {from: 'icon.png'}, 
    //   {from: 'manifest.json'},
    // ]),
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[name].js.map',
    // }),
    // new CleanWebpackPlugin(),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // })   
  ]
}
