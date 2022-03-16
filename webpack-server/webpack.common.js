const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

require("dotenv").config();

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  entry: {
    server: {
      import: "./src/app",
    },
  },
  output: {
    clean: true,
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        loader: "ignore-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
