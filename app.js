fs = require('fs');
var start = new Date().getTime();
fs.readFile('angular.zip', function (err,data) {
    console.log('data1 ', data);
    console.log('data1 ', 'duration', new Date().getTime() - start, 'ms');
});
fs.readFile('angular.zip', function (err,data) {
    console.log('data', data);
    console.log('data2 ', 'duration', new Date().getTime() - start, 'ms');
});
console.log('do something else ', 'duration', new Date().getTime() - start, 'ms');