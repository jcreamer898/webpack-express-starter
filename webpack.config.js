"use strict";

let path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

let plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    minChunks: 2
  }),
  new ExtractTextPlugin("[name].css"),
  new webpack.ProvidePlugin({
    $: path.join(__dirname, "node_modules", "jquery/dist/jquery"),
    jQuery: path.join(__dirname, "node_modules", "jquery/dist/jquery")
  })
];

module.exports = {
  context: path.join(__dirname, "ui"),
  entry: {
    common: ["jquery", "bootstrap"],
    home: "./js/home/index.js",
    about: "./js/about/index.js",
    contact: "./js/contact/index.js"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
    chunkFilename: "[name]_[chunkhash].js"
  },
  resove: {
    root: path.join(__dirname, "ui")
  },
  module: {
    noParse: ["jquery", "underscore"].map(function(name) {
      return path.join(__dirname, "node_modules", name);
    }),
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel"
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style", 
        "css" + // !autoprefixer-loader?browsers=last 3 version
        "!sass?" +
        "includePaths[]=" + path.resolve(__dirname, "./node_modules"))
    }, { 
      test: /\.otf$|\.eot$|\.svg$|\.woff2?$|\.ttf$/,
      loader: "file?name=[path][name].[ext]" 
    }]
  },
  plugins: plugins
};
