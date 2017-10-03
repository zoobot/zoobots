// 'use strict'
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const five = require("johnny-five");

let board = new five.Board();
let myMotion = false;


board.on("ready", function() {
  console.log('Arduino connected');
  var led = new five.Led(13);
  var motion = new five.Motion(3);

  // Adafruit Shield
  // var configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2;

  // var motor1 = new five.Motor(configs.M1);
  // var motor2 = new five.Motor(configs.M2);
  // var motor3 = new five.Motor(configs.M3);
  // var motor4 = new five.Motor(configs.M4);

  // Pololu VNH5019 motor shield
    var motor1 = new five.Motor({
      pins: {
        pwm: 9,
        dir: 2,
        cdir: 4,
        enable: 6
      }
    });

    var motor3 = new five.Motor({
      pins: {
        pwm: 10,
        dir: 7,
        cdir: 8,
        enable: 12
      }
    });

  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("motionstart", function(data) {
    console.log(data.detectedMotion);
    myMotion = data.detectedMotion;
    if (myMotion === true) {
      console.log('motionstart', data.detectedMotion);
      myMotion = data.detectedMotion;

      io.emit('motionstart', 'robot coming');
    }
  });
  motion.on("motionend", function() {
    console.log("motionend");
  });
  var count = 0;
  io.on('connect', function(socket) {
    console.log('connected', socket)
    socket.on('chat message', function(msg) {
      io.emit('chat message', msg);
    });

    //LED stuff
    socket.on('led:on', function(data) {
      led.on();
      console.log('LED ON RECEIVED');
    });
    socket.on('led:off', function(data) {
      led.stop().off()
      console.log('LED OFF RECEIVED');
    });
    socket.on('led:blink', function(data) {
      led.blink(1000);
      console.log('LED BLINK RECEIVED');
    });

    //motor driver
    socket.on('robot-left', function(data) {
      console.log('robot-left', count++);
      motor1.forward(150);
      motor3.reverse(255);
      io.emit('robot', 'horse left.');
    });
    socket.on('robot-right', function(data) {
      console.log('robot-right', count++);
      motor1.reverse(150);
      motor3.forward(255);
      io.emit('robot', 'horse right.');
    });
    socket.on('robot-forward', function(data) {
      led.on(1000);
      motor1.forward(255);
      motor3.forward(255);
      console.log('horse-forward', count++);
      io.emit('robot', 'horse forward.');
    });
    socket.on('robot-back', function(data) {
      led.blink(1000);
      motor1.reverse(255);
      motor3.reverse(255);
      console.log('robot-back', data, count++);
      io.emit('robot', 'horse back.');
    });
    socket.on('robot-stop', function(data) {
      motor1.stop();
      motor3.stop();
      console.log('robot-stop', data, count++);
      io.emit('robot', 'horse stop.');
    });
  });
});



startServer()

function startServer() {
  app.use(express.static(__dirname + '/../client'));
  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  //Socket connection handler
  io.on('connection', function(socket) {
    console.log(socket.id);
  });


  http.listen(3000, function() {
    console.log('listening on *:3000');
  });
}
