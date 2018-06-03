var socket = io();
// socket.on('room', msg => console.log('room ', msg))
socket.on('pipony moved', msg => console.log('pipony moved ', msg))
var urls = [
  'http://192.168.55.117:8000',
  'http://192.168.55.120:8000',
  'http://192.168.55.121:8000',
  'http://192.168.55.108:8000',
]

$(".pipony1 button").click(function(e) {
  var url = urls[0]
  console.log('pipony1 ',url)
  var socket = io.connect(url);
  // console.log('socket',socket)

  console.log(e.currentTarget.className)
  if (e.currentTarget.className === 'robot-left') {
    socket.emit('robot-left');
  }
  if (e.currentTarget.className === 'robot-right') {
    socket.emit('robot-right');
  }
  if (e.currentTarget.className === 'robot-forward') {
    console.log('robot_forward')
    socket.emit('robot-forward');
  }
  if (e.currentTarget.className === 'robot-back') {
    socket.emit('robot-back');
  }
  if (e.currentTarget.className === 'robot-stop') {
    socket.emit('robot-stop');
  }
  if (e.currentTarget.className === 'robot-circle') {
    socket.emit('robot-circle');
  }
  if (e.currentTarget.className === 'disconnect') {
    socket.emit('disconnect');
  }
  return false;
});

$(".pipony2 button").click(function(e) {
  var url = urls[1]
  console.log('url pipony1',url)
  var socket = io.connect(url);
  // console.log('socket',socket)

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
  if (e.currentTarget.className === 'robot-stop') {
    socket.emit('robot-stop');
  }
  if (e.currentTarget.className === 'disconnect') {
    socket.emit('disconnect');
  }
  return false;
});

$(".pipony3 button").click(function(e) {
  var url = urls[2]
  console.log('url pipony6',url)
  var socket = io.connect(url);
  // console.log('socket',socket)

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
  if (e.currentTarget.className === 'robot-stop') {
    socket.emit('robot-stop');
  }
  if (e.currentTarget.className === 'disconnect') {
    socket.emit('disconnect');
  }
  return false;
});

$(".pipony6 button").click(function(e) {
  var url = urls[3]
  console.log('url pipony6',url)
  var socket = io.connect(url);
  // console.log('socket',socket)

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
  if (e.currentTarget.className === 'robot-stop') {
    socket.emit('robot-stop');
  }
  if (e.currentTarget.className === 'disconnect') {
    socket.emit('disconnect');
  }
  return false;
});
