var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    entry: {
        bundle: "./src/index.tsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/../dist"
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less"]
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json'},
            {test: /\.tsx?$/, loader: "ts-loader?configFileName=./configs/tsconfig.json"},
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?url=false!less-loader"})
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            filename: __dirname + "/../dist/index.html",
            template: "./src/index.html",
            inject: false
        })
    ]
};