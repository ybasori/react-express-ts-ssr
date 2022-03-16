const path = require("path");
const webpack = require("webpack");

require("dotenv").config();

module.exports = {
  entry: {
    index: {
      import: "./src/index.tsx",
      dependOn: ["react", "react-dom", "react-router-dom"],
    },
    react: "react",
    "react-dom": "react-dom",
    "react-router-dom": "react-router-dom",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "../public/"),
    filename: "assets/js/[name].bundle.js",
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
