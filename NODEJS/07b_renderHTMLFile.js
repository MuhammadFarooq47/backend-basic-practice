var http = require('http');
var fs = require('fs')

function sendFile(path, response, mine){
    fs.readFile(path, function(error, data){
        if(error){
            return
        }
        response.writeHead(200, {'Content-Type' : mine});
        response.end(data.toString());
    });
}

http.createServer(function(request, response){
    if(request.url === '/demoscript.js'){
        sendFile('./demoscript.js', response, 'text/javascript');
        return;
    }

    fs.readFile('demofile1.html', function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}).listen(8082)