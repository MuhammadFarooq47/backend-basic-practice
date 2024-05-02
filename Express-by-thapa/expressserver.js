const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
    res.send("Hello World")
});

app.get('/about', function(req, res) {
    res.send('About page')
});

app.get('/calculator', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.post('/calculator', function(req, res) {
    //res.send('Thank you for your lovely post');
    const val1 = Number(req.body.val1);
    const val2 = Number(req.body.val2);
    const sum = val1 + val2;
    res.send(`The Sum of two number is : ${sum}`)
});

app.get('/bmi', function(req, res) {
    res.sendFile(__dirname + '/bmicalculator.html')
});

app.post('/bmi', function(req, res) {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = weight / (height*height);
    res.send(`The BMI of your body is : ${bmi}`)
})

app.listen(5005, function(req, res){
    console.log("Server is running at port No. 5005")
})