//express test
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/pads', function(req, res){
    res.send('Hello World Pads!');
});

app.listen(8080);
console.log('express started > port: 8080');