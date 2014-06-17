var express = require('express');
var app = express();
app.use(express.static('public'));
app.use('/bower_components', express.static('bower_components'));


app.get('/', function (req, res) {
    res.sendfile('views/index.html');
});

app.get('/api', function(req, res){
    var data = require('./data/data.json');
    res.json(data);
});

app.listen(8080);
console.log('express started > port: 8080');