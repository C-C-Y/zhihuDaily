const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  baseUrl: "./",
  assetsDir: "asset",
  css: {},
  chainWebpack: config => {
    config.resolve.alias.set("styles", resolve("src/assets/style"));
  },
  devServer: {
    hot: true,
    inline: true
  }
};
