var express = require('express');
var mongojs = require('mongojs');

var app = express();
var port = 3000;
var db = mongojs('contactlist', ['contactlist']);

// app.get('/', function(req, res){
//   res.send("Hello World");
// });

app.use(express.static(__dirname + "/public"));

// GET REQUEST
app.get('/contactlist', function (req, res) {
  console.log("Received a GET request");

  

});

app.listen(port);
console.log("Server On: " + port);