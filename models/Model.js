var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    username: String,
    Title: String,
    Description: String,
    Date: String
});

var Model = mongoose.model('model',ModelSchema);

module.exports = Model;
