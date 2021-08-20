var express = require('express');
var app = express();

app.get('/', function (req, res) {
    // --
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

app.use(express.static('knowledge_check'));

 
app.get('/localhost:8080', function (req, res) {
    res.send( __dirname + "/" + "index.html" );
 })
 
 app.get('/localhost:8080/about', function (req, res) {
    res.send( __dirname + "/" + "about.html" );
 })
 
 app.get('/localhost:8080/contactme', function (req, res) {
    res.send( __dirname + "/" + "contact-me.html" );
 })
 
 app.get('/', function (req, res) {
    res.send( __dirname + "/" + "404.html" );
 })
 
