var http = require('http');
var url = require('url');

//Ya file url get krny k lea use hoti hy...

http.createServer(function(request, response){
    console.log('url' ,request.url);
    console.log("Method", request.method)
    response.writeHead(200, {'Content-Type' : 'text/html'});
    console.log('before', request.url)
    var q = url.parse(request.url, true).query;
    console.log('after', request.url);
    console.log('q', q);
    var text = q.year + '' + " " + q.month;
    response.end(text)

}).listen(8083)