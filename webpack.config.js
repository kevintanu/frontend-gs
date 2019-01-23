const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    login: "./src/js/login.js",
    admin: "./src/js/admin.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    filename: "js/[name]_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: "style-loader",
          //   options: {
          //     insertAt: "top",
          //     singleton: true
          //   }
          // },
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: "./src/pages/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      chunks: ["login"],
      template: "./src/pages/login.html"
    }),
    new HtmlWebpackPlugin({
      filename: "admin.html",
      chunks: ["admin"],
      template: "./src/pages/admin.html"
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  }
};
