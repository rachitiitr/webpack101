const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: 'css-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}