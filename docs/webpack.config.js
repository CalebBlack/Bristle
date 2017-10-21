const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/src'
      }
    ],
  }

};
