var express = require('express');
var app = express();
var port =  3000;

app.get('/helloworld', function(req,res){
    res.send("Hello to the world.");
});

app.listen(port, function(){
    console.log("Express running on port" + port);
});