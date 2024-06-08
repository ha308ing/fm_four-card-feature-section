const { paths } = require("./config");
const { src, dest, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const postcssCustomMedia = require("postcss-custom-media");
const postcssCustomProperties = require("postcss-custom-properties");
const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssImport = require("postcss-import");
const postcssFontMagician = require("postcss-font-magician");
const postcssMixins = require("postcss-mixins");
const postcssColorMod = require("postcss-color-mod-function");

const styles = () =>
  src(paths.styles)
    .pipe(
      postcss([
        postcssGlobalData({
          files: paths.stylesGlobal,
        }),
        postcssCustomProperties({ preserve: false }),
        postcssCustomMedia(),
        postcssImport(),
        postcssColorMod(),
        postcssFontMagician({
          variants: {
            Poppins: {
              200: ["woff2"],
              400: ["woff2"],
              600: ["woff2"],
            },
          },
          display: "swap",
        }),
        postcssMixins(),
        cssnano(),
        autoprefixer(),
      ])
    )
    .pipe(dest(paths.dist));

const stylesWatch = () => watch(paths.stlyesWatch, styles);

module.exports = { styles, stylesWatch };
