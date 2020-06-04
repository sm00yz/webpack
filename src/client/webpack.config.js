const path = require('path') 
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    entery: './src/index.js',
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                }
        ]
}, 
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
    })
]

}
