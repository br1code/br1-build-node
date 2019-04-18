const { src, dest } = require('gulp');

exports.default = (cb) => {
    src('./project/**/*')
    .pipe(dest('.././project'));
    cb();
};