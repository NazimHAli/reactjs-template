const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = 3001;

module.exports = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    devServer: {
        static: path.join(__dirname, "dist"),
        port: PORT,
    },
    output: {
        publicPath: "auto",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            manifest: "./public/manifest.json",
            favicon: "./public/favicon.ico",
            template: "./public/index.html",
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};