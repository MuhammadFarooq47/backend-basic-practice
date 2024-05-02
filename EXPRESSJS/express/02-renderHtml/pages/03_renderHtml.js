const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

// static folder
//ya folder publically avaialable hy means hr koi isko access kr skta hy
app.use('/public', express.static('public'));

app.get('/', function (req, res){
    res.sendFile('index.html', {root: __dirname});
    //res.sendFile('welcome.html', {root: path.join(__dirname, '/pages')})
});

app.get('/users', function(req, res) {
    res.json([{id: 1, name: 'Jhon'}, {id: 2, name: 'Doe'}, {id: 3, name: 'Abc'}])
});

app.listen(app.get('port'), function(){
    console.log(`Express Started on: http://localhost:${app.get('port')}`)
})