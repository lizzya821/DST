'use strict'

const { resolve } = require('path')

module.exports = {
    entry: ['babel-polyfill','./app/index.js'],
    mode: 'development',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: resolve(__dirname, './app'),
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }, 
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        }
      ]
    }
  }