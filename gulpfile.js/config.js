const pugRoot = "src/pug";
const stylesRoot = "src/styles";
const distRoot = "dist";
const stylesGlobal = ["variables", "media"].map(
  (file) => `${stylesRoot}/global/${file}.css`
);

const paths = {
  pug: pugRoot + "/index.pug",
  pugRoot,
  pugWatch: pugRoot + "/**/*",
  styles: stylesRoot + "/style.css",
  stylesGlobal,
  stlyesWatch: stylesRoot + "/**/*",
  assets: "src/assets/**/*",
  assetsDist: distRoot + "/assets",
  dist: distRoot,
};

module.exports = { paths };
