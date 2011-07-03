//for testing on localhost 
var static = require('node-static'),
	helloWorld = require('./examples/hello.js');


var file = new(static.Server)('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // Serve files!
        file.serve(request, response);
    });
}).listen(8080);
