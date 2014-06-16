fs = require('fs');
var start = new Date().getTime();
fs.readFile('grid.png', function (err,data) {
    console.log('data1 ', data);
});
fs.readFile('grid.png', function (err,data) {
    console.log('data', data);
});
console.log('do something else ', 'duration', new Date().getTime() - start, 'ms');