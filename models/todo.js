var mongoose = require('mongoose');

var schema = mongoose.Schema({
    task: String
    // done: Boolean
});

var todo = mongoose.model('tasks', schema);

module.exports = todo;
