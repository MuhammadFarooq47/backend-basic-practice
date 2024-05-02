var http = require('http');

var courses = [{id: 1, name: 'Danish', id: 2, name: 'Farooq'}];

var users = ['userA', 'userB'];

var server = http.createServer(function(request, response){
    console.log('Got a request', request.url)
    if (request.url === '/api/courses'){
        response.write(JSON.stringify(courses));
        response.end()
    } else if (request.url === '/api/users') {
        response.write(JSON.stringify(users));
        response.end()
    } else if(request.url === '/admin'){
        response.writeHead(200, {'content-Type': 'text.html'});
        response.write('<h1> This is admin Page </h1>');
        response.end()
    }
     else {
        response.write('<h1> Hello World </h1> <h2>'+request.url+'</h2>');
        response.end()
    }
}).listen(3002)