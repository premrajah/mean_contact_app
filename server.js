var express  = require('express');
var app = express();
var port = 3000;

// app.get('/', function(req, res){
//   res.send("Hello World");
// });

app.use(express.static(__dirname + "/public"));

// GET REQUEST
app.get('/contactlist', function(req, res){
  console.log("Received a GET request");

  // Dummy data
  person1 = {
    name: "Prem Rajah",
    email: "prem@rajah.com",
    number: "07595 400 243"
  }
  person2 = {
    name: "James Bond",
    email: "james@bond.com",
    number: "07595 123 456"
  }
  person3 = {
    name: "John Smith",
    email: "john@smith.com",
    number: "07595 789 654"
  }

  var contactList = [person1, person2, person3];
  res.json(contactList); // responded by sending data as json

});

app.listen(port);
console.log("Server On: " + port);