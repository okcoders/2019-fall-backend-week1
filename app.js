//My App
var express = require('express');
var app = express();
var port =  3000;

app.use('/', express.static('files'));

app.get( '/helloworld', function(req,res){ 
  res.send("<h1>Hello to the world.</h1>"); }
);

app.post('/helloworld', function(req,res){
 res.send("This is NOT the right Hello World!");
});

app.get('/json/helloworld', function(req,res){
 res.json( { message: "Hello to the world." } );
});

app.get('/hello/world', function(req,res){
 res.send("This is ANOTHER hello world.");
});

app.get('/message/1', function(req,res){
	res.json( {message: "This is message one"} );
});

app.get('/message/1.thing', function(req,res){
	res.json( {message: "This is message one dot thing"} );
});

app.get('/message/for/:id', function(req,res){
	var userID = req.params.id;
	res.json( {message: "This is a message for " + userID} );
});

app.get('/message/*', function(req,res){
	res.json( {message: "THis is every other message"} );
});

app.listen(port, function(){
    console.log("Express running on port:" + port);
});