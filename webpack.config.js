const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'http-client.js',
        library: 'http-client',
        libraryTarget: 'umd',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            '@babel/plugin-proposal-private-property-in-object',
                            '@babel/plugin-proposal-private-methods',
                            '@babel/plugin-proposal-class-properties',
                        ]
                    }
                }
            }
        ]
    }
};