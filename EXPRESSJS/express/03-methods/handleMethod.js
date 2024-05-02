const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 5001);

//app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//GET
app.get('/', function(req, res){
    res.json(req.query);
});

app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


//POST
app.post('/user', (req, res) => {
    console.log('req.body', req.body)
    //method No. 1 is method sy mery pas data normal ki form me ayga
    res.send(`username : ${req.body.email} <br /> password : ${req.body.password}`)

    //Method No.2 is method sy mery pas data json ki form me ayga
    res.send(JSON.stringify(req.body))
    // res.send('User page')
    // console.log('req.body', req.body)
    // res.end(JSON.stringify(req.body));
});

//app.put()
//app.delete()

app.listen(app.get('port'), function(){
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});