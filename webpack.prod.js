const { merge } = require("webpack-merge");
const commonServer = require("./webpack-server/webpack.common");
const commonClient = require("./webpack-client/webpack.common");

const server = merge(commonServer, {
  mode: "production",
});

const client = merge(commonClient, {
  mode: "production",
});

module.exports = [server, client];
