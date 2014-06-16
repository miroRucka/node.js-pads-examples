fs = require('fs');
var start = new Date().getTime();
var data1 = fs.readFileSync('angular.zip');
console.log('data1 ', data1);
console.log('data1 ', 'duration', new Date().getTime() - start, 'ms');
var data2 = fs.readFileSync('angular.zip');
console.log('data', data2);
console.log('data2 ', 'duration', new Date().getTime() - start, 'ms');
console.log('do something else ', 'duration', new Date().getTime() - start, 'ms');