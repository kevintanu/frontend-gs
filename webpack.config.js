const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    login: "./src/js/login.js",
    signup: "./src/js/signup.js",
    admin: "./src/js/admin.js"
  },
  output: {
    path: path.resolve(__dirname, "./public/dist/js"),
    filename: "[name]_bundle.js"
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
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  }
};
