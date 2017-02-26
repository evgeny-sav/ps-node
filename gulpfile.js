/*jshint esversion: 6 */
'use strict';

let gulp = require('gulp');
let jshint = require('gulp-jshint');
let jscs = require('gulp-jscs');
let wiredep = require('wiredep').stream;
let inject = require('gulp-inject');
let nodemon = require('gulp-nodemon');

let jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('codestyle', () => {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', () => {

    let options = {
        bowerJson: require('./bower.json'),
        directory: 'public/lib',
        ignorePath: '../../public'
    };

    let injectFiles = gulp.src(
        [
            'public/css/*.css',
            'public/js/*.js'
        ],
        {
            read: false
        });

    let injectOptions = {
        ignorePath: 'public'
    };

    return gulp.src('src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectFiles, injectOptions))
        .pipe(gulp.dest('src/views'));
});


gulp.task('serve', ['codestyle', 'inject'], () => {
    let options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 9000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', (ev) => {
            console.log('Restarting ...');
        });
});
