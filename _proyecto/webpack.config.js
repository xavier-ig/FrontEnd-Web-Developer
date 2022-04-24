const path = require('path'); //Core Module de NODE
const HTMLWebpackPlugin = require('html-webpack-plugin');

//Webpack config
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.(png|svg|jpg|gif|jpeg)$/, use: ['file-loader']  }
        ],
    },
    devServer: {
        static: './dist',
        watchFiles: ['./src/**/*.html'],
    },
};