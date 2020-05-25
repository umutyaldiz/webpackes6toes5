var path = require('path');

module.exports = {
    entry: {
        app: './src/example.js'
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'example_bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        ]
    }
};