const { src, dest, parallel } = require("gulp");
const minifyCSS = require("gulp-csso");
const concat = require("gulp-concat");

const pathConfig = {
  src: {
    html: "src/pages/**/*.html",
    img: "src/img/*.png"
  },
  dest: {
    html: "public/pages",
    css: "public/dist/css",
    img: "public/dist/img"
  }
};

function html() {
  return src(pathConfig.src.html).pipe(dest(pathConfig.dest.html));
}

function signInCss() {
  return src([
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "src/css/signin.css"
  ])
    .pipe(minifyCSS())
    .pipe(concat("signin.css"))
    .pipe(dest(pathConfig.dest.css));
}

function signUpCss() {
  return src([
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "src/css/signup.css"
  ])
    .pipe(minifyCSS())
    .pipe(concat("signup.css"))
    .pipe(dest(pathConfig.dest.css));
}

function adminCss() {
  return src(["node_modules/admin-lte/dist/css/adminlte.min.css"])
    .pipe(minifyCSS())
    .pipe(concat("admin.css"))
    .pipe(dest(pathConfig.dest.css));
}

function img() {
  return src(pathConfig.src.img).pipe(dest(pathConfig.dest.img));
}

exports.signInCss = signInCss;
exports.signUpCss = signUpCss;
exports.adminCss = adminCss;
exports.img = img;
exports.html = html;
exports.default = parallel(html, signInCss, signUpCss, adminCss, img);
