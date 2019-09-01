const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
  // context: path.resolve(__dirname, "src"),
  devtool: 'cheap-module-eval-source-map',
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
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
    // new CopyWebpackPlugin([
    //   {from: '*.html'},
    //   {from: 'icon.png'}, 
    //   {from: 'manifest.json'},
    // ]),
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[name].js.map',
    // }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}
