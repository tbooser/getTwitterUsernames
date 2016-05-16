var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')


var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});



var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  devtool: 'inline-source-map',
  entry: APP_DIR + '/index.jsx',
  target: 'node',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        include : APP_DIR,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },

plugins: [
  

  HTMLWebpackPluginConfig, 
  
  new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),  
  
  new webpack.HotModuleReplacementPlugin(),
  
  new webpack.NoErrorsPlugin()]

};

module.exports = config;