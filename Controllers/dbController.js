var model = require('../models/Model');
var url = require('../config');
var setupController = require('./setupController');

module.exports.FindandUpdate = function(req, callback) {
		model.findByIdAndUpdate(req.body.id, { Title: req.body.title, Description: req.body.description, Date: new Date()}, function (err, result) {
			if (err) throw err;
			callback(err, result);
		});
	};

module.exports.CreateNew = function(req, callback) {
		var newModel = model({
			username: userValues.uname,
			Title: req.body.Title,
			Description: req.body.Description,
			Date: new Date()
		});
		newModel.save(function (err, result) {
			if (err) throw err;
			callback(err, result);
		});
	};

module.exports.DeleteOne = function(req, callback) {
		model.findByIdAndRemove(req.body.id, function (err) {
			if (err) throw err;
			callback(err);
		});
	};

module.exports.SearchbyName = function(req, callback) {
		model.find({ username: req.params.name }, function (err, result) {
			if (err) throw err;
			callback(err, result);
		});
	};

module.exports.SearchbyID = function(req, callback) {
		model.findById(req.params.id, function (err, result) {
			if (err) throw err;
			callback(err,result);
		});
	};

module.exports.initSetup = function(callback) {
		setupController(function(err, result){
			if (err) throw err;
			callback(err, result);
		});
	};




