const path = require('path');
const autoprefixer = require('autoprefixer')
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: './project/frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, './project/frontend/static/frontend'),
        filename: 'appindex.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env',
                              '@babel/react',{
                              'plugins': ['@babel/plugin-proposal-class-properties','emotion']}]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=800000&name=images/[name].[ext]'
            }
            
        ]
    },
}
