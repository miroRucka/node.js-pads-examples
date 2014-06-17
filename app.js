var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.get('/api', function(req, res){
    var data = require('./data.json');
    res.json(data);
});

app.listen(8080);
console.log('express started > port: 8080');