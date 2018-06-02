var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    email: String
});

UserSchema.methods.verifyPassword = (password,callback)=>{
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        if (err) return callback(err);
        cb(null, isMatch);
    })
}

UserSchema.pre('save', (callback)=>{
    var user = this;

    if(!user.isModified('password')) return callback();

    bcrypt.hash(user.password, salt, null, (err, hash)=>{
        if (err) return callback(err);
        user.password = hash;
        callback();
    });
});

var User = mongoose.model('user', UserSchema);

module.exports = User;
