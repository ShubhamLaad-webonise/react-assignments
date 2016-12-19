var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
   entry: './js/main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },
    module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {
             test: /\.sass$/,
             loaders: ['style', 'css', 'sass']
         }      
      ]
   }
}

module.exports = config;
