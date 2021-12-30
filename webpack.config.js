const path = require('path');
const MiniCSSPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
let mode = 'development';


if(process.env.NODE_ENV === "production") {
  mode = "production"
}

module.exports = {
  mode: mode,
  target:'browserslist',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devServer: {
    port: 3000,
    liveReload: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSPlugin(), new HtmlWebpackPlugin(
    {template: './index.html'}
  )],
  
  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader'
      }
    },

    {
      test:/\.(png|jpeg|jpe|gif|svg)$/i,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 30 * 1024,
        }
      }
    },

    {
      test:/\.(scss|css)$/,
      use: [MiniCSSPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
    }
  ]
  }
}