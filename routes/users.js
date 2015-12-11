/**
 * Created by Jimmy on 2015/12/10.
 * QQ:331701843
 * Email:wjy307@qq.com
 */
var express = require('express');
var mongoose = require('mongoose');

var Users = require('./../dao/Users.js');

exports.findUsers = function(req, res) {

}

exports.findUserById = function(req, res) {

}

/**
 * ±£´æ
 * @param req
 * @param res
 */
exports.save = function(req, res) {
    Users.findById(req.params.id, function(user) {
        if (user) {
            console.log(req.body);
            user.user_name = req.body.user_name;
            user.password = req.body.password;
            user.update_time = Date.now;

            Users.updateById(req.params.id, user);
        } else {
            var user = Users.newInstance();
            console.log(req.body);
            user.user_name = req.body.user_name;
            user.password = req.body.password;

            user.save();
        }

        res.redirect('/admin/users');
    })
}

exports.remove = function(req, res) {
    console.log(req.params.id);
    Users.removeById(req.params.id, function(err) {
        if (!err)
            res.write('success');
        res.end();
    })
}

exports.edit = function(req, res) {
    console.log(req.query.id);
    Users.findById(req.params.id, function(user) {
        console.log(user);
        res.render('users-edit', {user : user});
    })
}