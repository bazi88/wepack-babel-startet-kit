var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
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
        }]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')})
    ]
}