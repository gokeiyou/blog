var express = require('express');
var router = express.Router();

var Category = require('./../dao/Category.js');
var Blog = require('./../dao/Blog.js');
var Users = require('./../dao/Users.js');

exports.admin = function(req, res) {
	res.render('admin', {});
}

exports.categories = function(req, res) {
	Category.findAll(function(categories) {
		res.render('admin-categories', {categories: categories});
	});
}

exports.blogs = function(req, res) {
	Blog.findAll(function(blogs) {
		res.render('admin-blogs', {blogs: blogs})
	});
}

exports.users = function(req, res) {
	Users.findAll(function(users) {
		res.render('admin-users', {users: users});
	});
}
