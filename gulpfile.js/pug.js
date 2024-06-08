const { src, dest, watch } = require("gulp");
const gulp = require("gulp-pug");
const { paths } = require("./config");
const locals = require("./locals");

const pug = () =>
  src(paths.pug)
    .pipe(gulp({ locals, basedir: paths.pugRoot }))
    .pipe(dest(paths.dist));

const pugWatch = () => watch(paths.pugWatch, pug);

module.exports = { pug, pugWatch };
