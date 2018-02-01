const webpack = require('webpack');
const path = require('path');

// Config the vendor bundle to separate dependency packing
const vendor = ['react', 'react-dom', 'prop-types'];
const vendorBundlePlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.bundle.js',
});

// Config the babel loader to automate jsx to js transpiling
const babelLoader = {
  test: /\.jsx$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env', 'react'],
      plugins: ['transform-class-properties'],
    },
  },
};

module.exports = {
  context: path.resolve(__dirname, 'src'), // source context
  entry: { app: './App.jsx', vendor }, // "main" file
  output: {
    filename: 'app.bundle.js', // main app bundle
    path: path.resolve(__dirname, 'static/js'), // output directory
    publicPath: '/js', // asset path
  },
  plugins: [vendorBundlePlugin],
  module: {
    rules: [babelLoader], 
  },
  devServer: {
    port: 8000,
    contentBase: 'static',
  },
  devtool: 'source-map',
};
