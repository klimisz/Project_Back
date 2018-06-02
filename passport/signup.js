var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User')
var passport = require('passport-local');


module.exports = function (passport) {

    passport.use('signup', new LocalStrategy({
        passReqToCallback: true
    },
        function (req, username, password, done) {
            findOrCreateUser = function () {
                User.findOne({ 'username': username }, function (err, user) {
                    if (err) {
                        console.log('Error in SignUp:' + err);
                        return done(err);
                    }

                    if (user) {
                        console.log('User already exists');
                        return done(null, false, req.flash('message', 'User Already Exists'));
                    } else {
                        var newUser = new User();
                        newUser.username = username;
                        newUser.password = password;
                        newUser.email = req.param('email');

                        newUser.save(function (err) {
                            if (err) {
                                console.log('Error in Saving user: ' + err);
                                throw err;
                            }
                            console.log('User Registered');
                            return done(null, newUser);
                        })
                    }
                })
            }
        }
    ))
}