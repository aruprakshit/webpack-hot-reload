var path = require("path");

module.exports = {
  entry: './index.js',
  output: {
    filename: "bundle.js"
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true
  },
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
};
