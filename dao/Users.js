/**
 * Created by Jimmy on 2015/12/10.
 * QQ:331701843
 * Email:wjy307@qq.com
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = {
    user_name   : String,
    password    : String,
    create_time : {type: Date, default: Date.now},
    update_time : {type: Date, default: Date.now},
    removed     : {type: Boolean, default: false}
};

mongoose.model("users", UsersSchema)
var Users = mongoose.model('users');

// 查询所有用户
exports.findAll = function(callback) {
    Users.find({removed: false})
        .sort(' -create_time -user_name')
        .exec(function(err, users) {
            callback(err ? {} : users);
        });
};

// 根据用户ID查询用户信息
exports.findById = function(_id, callback) {
    Users.findOne({_id : _id}, function(err, user) {
        callback(err ? undefined : user);
    })
}

// 保存或更新处理
exports.saveOrUpdate = function(user) {
    Users.findByIdAndUpdate(blog._id, blog, {upsert: true}, function(err) {

    });
}

// 更新账号信息
exports.updateById = function(_id, user) {
    Users.update({_id: _id}, user, function(err) {
        console.log(err);
    });
}

exports.removeById = function(_id, callback) {
    Users.update({_id: _id}, {removed: true}, function(err) {
        callback(err);
    });
}

// 实例化
exports.newInstance = function() {
    return new Users();
}