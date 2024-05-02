const express = require('express');
const path = require('path')

const app = express();

app.set('port', process.env.PORT || 5000);

// static folder
//ya folder publically avaialable hy means hr koi isko access kr skta hy
app.use('/public',express.static('public'));
console.log(__dirname + '/public')

app.get('/', function (req, res){
    res.send('Express Works');
    //HTML file ho ya koi bhe file agr humy dilever krni ho tw hum simply res ya res.sendFile use krty hn.....
    //res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('/users', function(req, res) {
    res.json([{id: 1, name: 'Jhon'}, {id: 2, name: 'Doe'}, {id: 3, name: 'Abc'}])
});

app.listen(app.get('port'), function(){
    console.log(`Express Started on: http://localhost:${app.get('port')}`)
})