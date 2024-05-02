const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 1000);

app.use(cookieParser());

app.get('/', function(req, res) {
    res.cookie('myFirstCookie', 'Looks Good');
    res.send('Cookies...!')
});

app.get('/clearcookie', function(req, res){
    res.clearCookie('myFirstCookie');
    res.send('Cookie Removed');
});

app.listen(app.get('port'), function(){
    console.log(`Express Started on: http://localhost:${app.get('port')}`)
})