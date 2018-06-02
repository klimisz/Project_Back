
module.exports = function (passport, app) {

    app.get('/', function (req, res) {
        res.render('index', { message: req.flash('message') });
    });

    app.post('/login', passport.authenticate('login', {
        successRedirect: '/api/models/testuser',
        failureRedirect: '/',
        failureFlash: true
    }));

    app.get('/signup', (req, res) => {
        res.render('register', { message: req.flash('message') });
    });

    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/models',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/signout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    
}


//NOT IN USE