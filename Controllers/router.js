var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var dbController = require('./dbController');
var passport = require('passport');


router.post('/login', passport.authenticate('login', {
    successRedirect: '/api/models/testuser',
    failureRedirect: '/login',
    failureFlash: true
}));

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/api/models/testuser',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signout', (req, res) => {
    req.logout();
    res.redirect('/');
});


router.route('/api/model')
    .post(function (req, res) {
        if (req.body.id) {
            dbController.FindandUpdate(req, function (err, result) {
                if (err) throw err;
                res.send('Success Updating Event');
            });
        }
        else {
            dbController.CreateNew(req, function (err, result) {
                if (err) throw err;
                res.send('Success Creating Event' + result);
            });
        }
    })

    .delete(function (req, res) {
        dbController.DeleteOne(req, function (err) {
            if (err) throw err;
            res.send('Success! Event Deleted');
        });
    });

router.get('/api/models/:name', function (req, res) {
    dbController.SearchbyName(req, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});


router.get('/api/model/:id', function (req, res) {
    dbController.SearchbyID(req, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/api/setupModels', function (req, res) {
    dbController.initSetup(function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;