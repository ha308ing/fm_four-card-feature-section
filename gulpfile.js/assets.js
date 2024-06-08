const { src, dest } = require("gulp");
const { paths } = require("./config");

exports.assets = () =>
  src(paths.assets, { encoding: false }).pipe(dest(paths.assetsDist));
