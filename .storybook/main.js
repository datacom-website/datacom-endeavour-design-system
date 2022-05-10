const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  // webpackFinal : async (config, { configType}) => {
  //   // extends to a sass support
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //     include: path.resolve(__dirname, '../')
  //   });

  //   //fonts
  //   config.module.rules.push({
  //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         query: {
  //           name: '[name].[ext]'
  //         }
  //       }
  //     ],
  //     include: path.resolve(__dirname, '../')
  //   });

  //   return config;
  // },
  previewHead: (head) => (`
    ${head}
    <link rel="stylesheet" href="../src/assets/font-awesome/css/all.css">
    
  `),
}