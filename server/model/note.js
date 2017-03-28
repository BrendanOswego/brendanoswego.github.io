var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Note = new Schema({
  name: String
});

module.exports = mongoose.model('Note',Note);
