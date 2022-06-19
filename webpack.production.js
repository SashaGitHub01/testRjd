const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");

module.exports = () => ({
   devtool: "nosources-source-map",
   output: {
      filename: "production.js"
   },
   optimization: {
      minimizer: [
         new OptimizeCSSAssetsPlugin({})
      ]
   },
   module: {
      rules: [
         {
            test: /\.sa?css$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: "css-loader",
                  options: {
                     importLoaders: 1,
                     modules: true,
                  },
               },
               "sass-loader"
            ],
            include: /\.module\..sa?css$/
         },
         {
            test: /\.s(a|c)ss$/,
            exclude: /\.module\..sa?css$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ]
         }
      ]
   },
   plugins: [new MiniCssExtractPlugin()]
});