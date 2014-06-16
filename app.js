var http = require('http');

var server = http.createServer(function (request, response) {
    setTimeout(function(){
        console.log('done: async task!')
    }, 5000);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello PADS!\n");

});

server.listen(8080);
console.log("Server running at http://127.0.0.1:8080/");