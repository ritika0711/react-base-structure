const path = require('path');

module.exports = {
   entry: {
     app: './src/js/client.js'
   },
   output: {    
     filename: 'client.min.js',
     path: path.resolve('./build')
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
     rules: [
       {
         test: /\.js$/, // include .js files
         exclude: /node_modules/, // exclude any and all files in the node_modules folder
         use: [
           {
             loader: "babel-loader",
             query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins : ['transform-class-properties', 'transform-decorators-legacy']
             } 
           }
         ]
       }
     ]
   },
};