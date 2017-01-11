// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.storybook/user/modify_webpack_config.js instead`.

const path = require('path');
const updateConfig = require('./user/modify_webpack_config');

const config = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw', 'sass']
      },
      {
        test: /\.json?$/,
        loaders: ['json'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.woff2?(\?\S*)?$/,
        loader: 'url?limit=65000&mimetype=application/font-woff'
      }
    ],
  }
};

updateConfig(config);
module.exports = config;
