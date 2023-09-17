const path = require("path");
const html = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    calculos: "./Modules/calculos.js",
    imgViewer: "./Modules/imgViewer.js",
    passwordGen: "./Modules/passwordGen.js",
    taskList: "./Modules/taskList.js",
    unitConvert: "./Modules/unitConvert.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new html({
      inject: true,
      template: "./Paginass/Inicio.html",
      filename: "./Paginass/Inicio.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new html({
      inject: true,
      template: "./Paginass/calculos/calculos.html",
      filename: "./Paginass/calculos/calculos.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new html({
      inject: true,
      template: "./Paginass/imgViewer/imgViewer.html",
      filename: "./Paginass/imgViewer/imgViewer.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new html({
      inject: true,
      template: "./Paginass/passwordGen/passwordGen.html",
      filename: "./Paginass/passwordGen/passwordGen.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new html({
      inject: true,
      template: "./Paginass/taskList/taskList.html",
      filename: "./Paginass/taskList/taskList.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new html({
      inject: true,
      template: "./Paginass/unitConvert/unitConvert.html",
      filename: "./Paginass/unitConvert/unitConvert.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
