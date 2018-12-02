var path    = require('path');
var hwp     = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
  });
const dev = process.env.NODE_ENV !== 'production';
const DefinePluginConfig = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  });
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: '[name].[hash].build.js',
        path: path.resolve(__dirname, '/dist')
    },
    devtool: 'inline-source-map',
    devServer: {
      host: 'localhost',
      port: '3000',
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            use: [
                 {
                    loader: 'style-loader'
                 }, 
                 {
                    loader: 'css-loader',
                    options: {
                       importLoader: 1,
                       modules: true,
                       localIdentName: '[name]_[local]__[hash:base64:5]'
                    }
                 }
            ]
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
          },
          {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader',
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          }
        ]
    },
    mode: dev ? 'development' : 'production',
    resolve: {
        extensions: ['.js', '.jsx'],
      },
      plugins: 
        dev
      ? [
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv()
      ]
      : [HTMLWebpackPluginConfig, DefinePluginConfig,new Dotenv()],
      optimization: {
        splitChunks: {
          cacheGroups: {
            default: false,
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              minChunks: 2,
              enforce: true
            }
        }
      }
    }
}
