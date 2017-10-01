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

socket.on('led', function(data) {
  $('#messages').prepend($('<li>').text(data));
});
