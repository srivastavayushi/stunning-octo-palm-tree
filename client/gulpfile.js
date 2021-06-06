const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(gap.prependText(`created by djkk-part-3`))
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/index.html", { base: "./" })
    .pipe(gap.prependText(`created by djkk-part-2`))
    .pipe(gulp.dest("./", { overwrite: true }));
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(gap.prependText(`Created by djkk`))
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
