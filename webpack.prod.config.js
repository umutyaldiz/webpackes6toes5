var path = require('path');

module.exports = {
    entry: {
        app: './src/example.js'
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'example_bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }
        ]
    }
};

