const path = require('path');

module.exports = {
    mode: 'development',
    entry: './list.js', // string | object | array
    output: {
        path: path.resolve(__dirname, 'dist'), // string
        filename: 'bundle.js', // string
        publicPath: '/assets/', // string
        library: 'list', // string,
        libraryTarget: 'umd', // universal module definition
    },
    devtool: 'source-map', // enum
    target: 'web', // enum
};