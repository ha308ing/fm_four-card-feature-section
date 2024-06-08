const { parallel, watch } = require("gulp");
const { pug, pugWatch } = require("./pug");
const { styles, stylesWatch } = require("./styles");
const { assets } = require("./assets");
// const { pixelGlass } = require("./pixel-glass");

// const _default = parallel(pug, styles, assets, pixelGlass);
const _default = parallel(pug, styles, assets);

exports.assets = assets;
exports.pug = pug;
exports.styles = styles;

exports.default = _default;

exports.watch = () => {
  _default();
  pugWatch();
  stylesWatch();
};
