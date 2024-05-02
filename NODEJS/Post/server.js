var http = require('http');
var fs = require('fs') //fs means file system
var qs = require('querystring');

const usersList = [{id: 1, name: 'abc'}, {id: 2, name: 'xyz'}];

http.createServer(function(request, response){

    if(request.url === '/users' && request.method === 'GET') {
        response.write(JSON.stringify(usersList));
        response.end();
        return
    }

    if (request.url === '/user' && request.method === 'POST') {
        var body = '';
        request.on('data', function(data){
            body += data;
            if (body.length > 1e6){
                request.connection.destroy();
            }
        });
        request.on('end', function() {
            console.log('body', body);
            var POST = qs.parse(body);
            console.log('POST', POST);
            response.write(JSON.stringify(POST));
            response.end()
        });
        return
    }

    if(request.url === '/user' && request.method === 'GET'){
        response.write('My user Information');
        response.end();
        return;
    }

    if (request.url.indexOf('/user/') > -1 && request.method === 'GET'){
        var id = request.url.replace('/user/', '');
        response.write('Show User Information which have id: ' + id);
        response.end();
        return;
    }

    if (request.url === '/'){
        fs.readFile('index.html', function(error, data){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(data);
            response.end();
        });
        return;
    }
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Invalid Route');
    response.end();
}).listen(8003)