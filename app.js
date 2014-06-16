fs = require('fs');
var start = new Date().getTime();
var data1 = fs.readFileSync('grid.png');
console.log('data1 ', data1);
var data2 = fs.readFileSync('grid.png');
console.log('data', data2);
console.log('do something else ', 'duration', new Date().getTime() - start, 'ms');