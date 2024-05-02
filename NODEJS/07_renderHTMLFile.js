var http = require('http');
var fs = require('fs')

http.createServer(function(request, response){
    console.log('req', request.url);
    fs.readFile('demofile1.html', function(error, data){
        response.writeHead(200, {'Content-type' : 'text/html'});
        response.write(data);
        response.end()
    });
}).listen(8080)