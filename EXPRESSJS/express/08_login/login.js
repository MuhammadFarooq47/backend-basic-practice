const express = require('express');
const bodyParser = require('body-parser');
const sessions = require('express-session');


var session;
const app = express();


app.set('port', process.env.PORT || 1002);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(sessions({
    secret: '&123.@786543^',
    resave: false,
    saveUninitialized: true
}));

//static folder...
app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
    // res.send('Home Page')
})
app.get('/login', function(req, res){
    session = req.session;
    if(session.uniqueID){
        res.redirect('/redirects');
    }else{
      res.sendFile(__dirname + '/login.html')
       // res.send('Send File')
    }
});

app.post('/login', function(req, res){
    session = req.session;
    if (req.body.username === 'admin' && req.body.password === 'admin'){
        session.uniqueID = req.body.username
    }
    res.redirect('/redirects')
});

app.get('/redirects', function(req, res){
    session = req.session;
    if(session.uniqueID){
        res.redirect('/admin')
    }else{
        res.send('Who are you?');
    }
});

app.get('/admin', function(req, res){
   if(session.uniqueID){
       res.send('Woow you are now an Admin.....!! <a href="/logout"> Logout </a>')
   }else{
       res.send('Who are you?')
   };
});

app.get('/logout', function(req, res){
    req.session.destroy(function(err){
        console.log('Error', err);
        res.redirect('/login')
    });
});

app.get('*', function (req, res) {
    res.end('What Exactly you want?');
});


app.listen(app.get('port'), function(){
    console.log(`Express Started on: http://localhost:${app.get('port')}`)
})


