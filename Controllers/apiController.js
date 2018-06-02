var bodyParser = require('body-parser');
var dbController = require('./dbController');
var authController = require('./authController');


module.exports = function (app) {
	app.route('/api/model')
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

	app.get('/api/models/:name', function (req, res) {
		dbController.SearchbyName(req, function (err, result) {
			if (err) throw err;
			res.send(result);
		});
	});


	app.get('/api/model/:id', function (req, res) {
		dbController.SearchbyID(req, function (err, result) {
			if (err) throw err;
			res.send(result);
		});
	});

	app.get('/api/setupModels', function (req, res) {
		dbController.initSetup(function(err, result) {
			if (err) throw err;
			res.send(result);
		});
	});
}

//NOT IN USE