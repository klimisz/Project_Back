var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');
var bCrypt = require('bcrypt')
var passport = require('passport');

passport.use('login', new LocalStrategy({
    passReqToCallback: true
},
    function (req, username, password, done) {
        User.findOne({ 'username': username },
            function (err, user) {
                if (err) return done(err);
                if (!user) {
                    console.log('User Not Found with username: ' + username);
                    return done(null, false, req.flash('message', 'User not found'));
                }
                User.verifyPassword(password, function (err, isMatch) {
                    if (!isMatch) {
                        console.log('Invalid Password');
                        return done(null, false, req.flash('message', 'Invalid Password'));
                    }
                    return done(null, user);
                })
            }
        );
    }));


exports.isAuthenticated = passport.authenticate('login');