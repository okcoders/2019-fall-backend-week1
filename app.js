//My ToDo App
var express = require('express');
var mongoose = require('mongoose');

var app = express();
var todo = require('./models/todo');
var port =  3000;

app.use('/', express.static('files'));

mongoose.connect('mongodb://localhost/todo');
var db = mongoose.connection;

db.on('error', function(msg){
		console.log("Mongoose: Unable to connec to todo database. " + msg);
});

db.once('open', function(){
		console.log("Mongoose connected to todo database.");
});

// Let's begin our crud operations
app.get('/todo/all', function(req,res){
	todo.find({}).exec(function(err,tasks){
		if(err){
			console.log("Error getting tasks from todo database");
			res.status(404);
		} else {
			res.json(tasks);
		}
	});
});

// This is example code
app.get('/message/for/:id', function(req,res){
	var userID = req.params.id;
	res.json( {message: "This is a message for " + userID} );
});

app.listen(port, function(){
		console.log("Express running on port:" + port);
});
