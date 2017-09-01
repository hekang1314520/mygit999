


//var gulp = require("gulp");
////任务
//gulp.task("one",function(){
//	console.log("one");
//});

var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}



var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件





//gulp插件
var gulp = 	require("gulp");//引入插件
var htmlmin = require("gulp-htmlmin");//导入插件


//任务
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
gulp.task('htmlTask', function(){
	gulp.src('src/css/*')
	.pipe(htmlmin(obj))
	.pipe(gulp.dest('dest/css'));
});
gulp.task('default', ['htmlTask']);

