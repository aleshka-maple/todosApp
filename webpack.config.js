var path = require('path')
var webpack = require('webpack')


module.exports = {
    devtool: 'cheap-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [
                    path.resolve(__dirname, "src")
                ],
                test: /\.js$/
            },
            {
                test: /\.less$/,
                loaders : ['style-loader', 'css-loader', 'less-loader']
            },
            {
                use: [
                    {
                        loader: 'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-runtime']
                        }
                    }
                ],
                include: [
                    path.resolve(__dirname, "src")
                ],
                test: /\.js$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=[name].[ext]"
            },
        ]
    }
}