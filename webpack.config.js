const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    mode: 'development',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                enforce: 'pre',
                use: ['source-map-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                use: ['file-loader']
            }
        ]
    },
    
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
}
