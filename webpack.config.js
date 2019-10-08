
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                {
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]',
                },
                },
            ],
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebPackPlugin({
          template: path.join(__dirname, './src/index.html'),
        }),
      ],
}