'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  // 生成的html的title
  title: '',
  // 生成的html的檔名
  filename: 'index.html',
  // 注入bundle到body中
  inject: 'body'
});

const config = {
  devtool: "source-map",
  // context: path.resolve(__dirname, 'src'), //設定方法指定一開始的路徑
  entry: {
    app: './src/app/index.js'
    // custom: './src/app/custom.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 把所有 node_modules 內的程式碼打包成一支 vendors.bundle.js
        vendors: {
          test: /[\\/]node_modules[\\/]/i,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './dist/'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    htmlPlugin,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin([
    { from: './public', to: './public' },
  ])
  ],
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: require.resolve('jquery'), 
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        }, {
            loader: 'expose-loader',
            options: '$'
        }]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5 * 1024, //bytes
            name: '[hash:7].[ext]',
            outputPath: 'assets/'
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        type: 'javascript/auto',
        exclude: /node_modules/
      }
    ]
  },
  stats: { children: false },
  resolve: {
    alias: {
      // 確認 vue 的建構版本
      'vue$': 'vue/dist/vue.esm.js',
      "@": path.resolve(__dirname, 'src'),
      "@a": path.resolve(__dirname, 'src/assets'),
      "@v": path.resolve(__dirname, 'src/views'),
      "@c": path.resolve(__dirname, 'src/components'),
      "@u": path.resolve(__dirname, 'src/utils'),
      "@p": path.resolve(__dirname, 'src/app/plugins')
    },
    extensions: ['*', '.js', '.vue', '.json'],
  }
};

module.exports = config;