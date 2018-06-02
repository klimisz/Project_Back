var model = require('../models/Model');
var userValues = require('../config/config.json');

module.exports = function (callback) {
    // seed database
    var starterModels = [{
        username: userValues.uname,
        Title: 'Book',
        Description: 'This is a book!',
        Date: new Date()
    }, {
        username: userValues.uname,
        Title: 'Movie',
        Description: 'This is a movie!',
        Date: new Date()
    }, {
        username: userValues.uname,
        Title: 'Thesis',
        Description: 'This is a thesis!',
        Date: new Date()
    }];
    model.create(starterModels, function (err, result) {
        if (err) throw err;
        callback(err, result);
    });


}