'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('raidencashcore-build');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
