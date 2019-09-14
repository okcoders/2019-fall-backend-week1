//My App
var express = require('express');
var app = express();
var port =  3000;

app.get('/helloworld', function(req,res){
    res.send("Hello to the world.");
});

app.post('/helloworld', function(req,res){
    res.send("This is NOT the right Hello World!");
});

app.get('/hello/world', function(req,res){
    res.send("This is ANOTHER hello world.");
});

app.listen(port, function(){
    console.log("Express running on port" + port);
});