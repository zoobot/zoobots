// 'use strict'
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var five = require("johnny-five");
//Serve files at port #
var PORT = 3000;

// Make a new johnny-five board
var board = new five.Board();

board.on("ready", function() {
    console.log('Arduino connected');

    //Set LED to pin 13 on the arduino
    var led = new five.Led(13);

    io.on('connection', function(socket){
      //Socket on recieves from clients
      socket.on('chat message', function(msg){
        //socket emit sends to clients
        io.emit('chat message', msg);
      });

      //LED stuff
      socket.on('led:on', function (data) {
          led.on();
          console.log('LED ON RECEIVED');
      });
      socket.on('led:off', function (data) {
          led.stop().off()
          console.log('LED OFF RECEIVED');
      });
      socket.on('led:blink', function (data) {
          led.blink(1000);
          console.log('LED BLINK RECEIVED');
      });

    });
});

function startServer() {
  //Serve the files in the client folder
  app.use(express.static(__dirname + '/../client'));
  //Set the index file to open on browsing root
  app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  //Socket connection handler
  io.on('connection', function (socket) {
          console.log(socket.id);
  });

  //Server listening on PORT
  http.listen(PORT, function(){
    console.log('listening on *:' + PORT);
  });
}
startServer()

