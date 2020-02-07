const path = require('path');

let s = path.resolve(__dirname,"src");
console.log(s);
module.exports = {
    entry: './frontend/src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [
                    s
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: "development",
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'output'),
    },
};