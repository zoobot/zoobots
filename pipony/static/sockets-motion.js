var socket = io();
$('form').submit(function() {
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('chat message', function(msg) {
  if (msg === 'off') {
    socket.emit('led:off');
    console.log('LED OFF');
  }
  if (msg === 'on') {
    socket.emit('led:on');
    console.log('LED ON');
  }
  if (msg === 'blink') {
    socket.emit('led:blink');
    console.log('LED blink');
  }
  $('#messages').prepend($('<li>').text(msg));
});

$(".led button").click(function(e) {
  if (e.currentTarget.className === 'led-off') {
    socket.emit('led:off');
  }
  if (e.currentTarget.className === 'led-on') {
    socket.emit('led:on');
  }
  if (e.currentTarget.className === 'led-blink') {
    socket.emit('led:blink');
  }
  return false;
});

socket.on('motionstart', function(data) {
  if (data === true) {
    socket.emit('robot coming');
    console.log('robot coming');
  }
  $('#messages').prepend($('<li>').text(data));
});


var count = 0;

$(".left button").click(function(e) {
  console.log(e.currentTarget.className)
  if (e.currentTarget.className === 'robot-left') {
    socket.emit('robot-left');
  }
  if (e.currentTarget.className === 'robot-right') {
    socket.emit('robot-right');
  }
  if (e.currentTarget.className === 'robot-forward') {
    socket.emit('robot-forward');
  }
  if (e.currentTarget.className === 'robot-back') {
    socket.emit('robot-back');
  }
  return false;
});


socket.on('robot', function(data) {
  $('#messages').prepend($('<li>').text(data));
});
socket.on('led', function(data) {
  $('#messages').prepend($('<li>').text(data));
});
