// entry -> output
// console.log(__dirname);

const path = require('path');
// console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), // has to be absolute
        filename: 'bundle.js'
    }
};
