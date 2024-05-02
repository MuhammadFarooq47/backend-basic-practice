const express = require('express');

const app = express();

app.set('port', process.env.PORT || 1001);

function log(req, res, next){
    console.log(new Date(), req.method, req.url);
    next();
};

function secondMiddleware(req, res, next){
    console.log('Second Middleware');
    next();
};

app.get('/', log, secondMiddleware, function(req, res){
    res.send('Express Works');
});

app.get('/error', function(req, res, next){
    throw new Error('Testing Error');
});

app.listen(app.get('port'), function(){
    console.log(`Express Started on: http://localhost:${app.get('port')}`)
})

