module.exports = () => ({
   module: {
      rules: [
         {
            test: /\.sa?css$/,
            use: [
               'style-loader',
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
               'style-loader',
               'css-loader',
               'sass-loader',
            ]
         }
      ]
   },
});