// https://webpack.js.org/concepts/configuration/

// https://nodejs.org/api/path.html
const path = require('path');

// console.log(__dirname); // We can run this command with node to show the directory in the screen: node webpack.config.js
// console.log(path.join(__dirname, 'public'))

// entry -> output
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};