const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static('public'))
const staticPath = path.join(__dirname, '../public')
console.log('StaticPath ==>>', staticPath)
app.set('view engine', 'hbs');


// app.use(express.static(staticPath))
const hbsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
console.log('HBS path ==>>',hbsPath)
app.set("views", hbsPath)
hbs.registerPartials(partialsPath)

app.get("", (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/about/*', (req,res) => {
    res.render('error', {
        Error: "Opps sorry this page can't be found visit at home page.."
    })
})
app.get('*', (req, res) => {
    res.render('error', {
        Error: "Opps page not found...!"
    })
})


app.listen(5006, function(req, res){
    console.log("Server is running at port No. 5006")
})