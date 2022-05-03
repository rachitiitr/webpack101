const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()]
}