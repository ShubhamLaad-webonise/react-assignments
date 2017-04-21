var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var config = {
   entry: './js/main.js',

  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
   devServer: {
      inline: true,
      port: 8181
   },
  module: {
    loaders: [
       {
          test: /\.jsx?$/, //Reguler expresion for detacting file
          exclude: /node_modules/, //exclude folder
          loader: 'babel-loader', //Use binary package for above file
          query: {
             presets: ['es2015', 'react']
          }
       },
      {
        test: /\.sass$/,
        use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS]
          ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin(
      {template: './index.html'} //Which html file add js script
    )
  ]
}

module.exports = config;
