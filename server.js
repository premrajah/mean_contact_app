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

  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });

});

app.listen(port);
console.log("Server On: " + port);