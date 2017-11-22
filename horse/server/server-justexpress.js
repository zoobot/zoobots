var express = require('express');
var app = express();
var http = require('http').Server(app);

var PORT = 3000;


function startServer() {
  app.use(express.static(__dirname + '/../client'));
  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  http.listen(PORT, function() {
    console.log('listening on *:' + PORT);
  });
}
startServer()
