// entry -> output
// console.log(__dirname);

const path = require('path');
// console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), // has to be absolute
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,   // file ending with .js
            exclude: /node_modules/
        },
        {

            test: /\.s?css$/,  //s? makes s optional
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


// loader allows you to customize the behavior of webpack when you load some given files
// for example, when webpack sees a JS file or CSS......
// use babel to compile .js to ES6
