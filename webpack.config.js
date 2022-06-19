const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const modeConfiguration = env => require(`./webpack.${env}`)(env);



module.exports = function ({ mode = 'production' }) {
   const isDev = mode === 'development' ? true : false;

   return merge({
      entry: {
         main: "./src/index.tsx",
         db: './public/db,json'
      },
      output: {
         path: path.join(__dirname, "build"),
         filename: "index.bundle.js"
      },
      mode: process.env.NODE_ENV || "development",
      resolve: {
         extensions: [".tsx", ".ts", ".js"],
      },
      devServer: {
         port: 3000,
         open: true,
         hot: true
      },
      module: {
         rules: [
            {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: ["babel-loader"],
            },
            {
               test: /\.(ts|tsx)$/,
               exclude: /node_modules/,
               use: ['babel-loader'],
            },
            {
               test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
               type: 'asset/resource',
            },
            {
               test: /\.json$/,
               use: ['json-loader'],
               type: 'javascript/auto'
            },
         ],
      },
      plugins: [
         new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
         }),
         new CleanWebpackPlugin(),
         new ForkTsCheckerWebpackPlugin(),
         new webpack.HotModuleReplacementPlugin()
      ],
   },
      modeConfiguration(mode))
};
