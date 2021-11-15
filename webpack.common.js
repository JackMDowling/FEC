const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './client/src/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[island].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

};
