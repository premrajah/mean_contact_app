var express  = require('express');
var app = express();
var port = 3000;

// app.get('/', function(req, res){
//   res.send("Hello World");
// });

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Server On: " + port);