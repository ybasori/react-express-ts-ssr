const { merge } = require("webpack-merge");
const common = require("./webpack.common");

require("dotenv").config();

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: process.env.DEV_PORT,
    open: true,
    hot: true,
    proxy: {
      "*": {
        target: `http://localhost:${process.env.PORT}/`,
        changeOrigin: true,
      },
    },
  },
});
