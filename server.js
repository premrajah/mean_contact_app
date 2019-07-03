var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;
var db = mongojs('contactlist', ['contactlist']);

// app.get('/', function(req, res){
//   res.send("Hello World");
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// GET REQUEST
app.get('/contactlist', function (req, res) {
  console.log("Received a GET request");

  db.contactlist.find(function(err, docs){
    // console.log(docs);
    res.json(docs);
  });

});

// POST REQUEST
app.post('/contactlist', function(req, res) {
  console.log("Received a POST request: ");
  // console.log(req.body);

  // Insert data into mongodb
  db.contactlist.insert(req.body, function(err, doc){
    res.json(doc); // send this to controller
  });
});

app.delete('/contactlist/:id', function(req, res){
  var id = req.params.id;  // get parameter id from url
  console.log("Received a DELETE request: " + id);

  // delete from db
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.listen(port);
console.log("Server On: " + port);