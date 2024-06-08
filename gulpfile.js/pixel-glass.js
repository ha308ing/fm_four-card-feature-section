const { src, dest } = require("gulp");

exports.pixelGlass = () =>
  src(
    [
      "node_modules/pixel-glass/styles.css",
      "node_modules/pixel-glass/script.js",
      "design/desktop-design.jpg",
      "design/mobile-design.jpg",
    ],
    { encoding: false }
  ).pipe(dest("dist/pixel-glass"));
