//My App
var express = require('express');
var app = express();
var port =  3000;

app.get(
    '/helloworld', 
    function(req,res){
        res.send("<h1>Hello to the world.</h1>"); 
    }
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

app.listen(port, function(){
    console.log("Express running on port:" + port);
});