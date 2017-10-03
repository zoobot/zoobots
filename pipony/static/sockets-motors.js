// var socket = io();
// var url = window.location.protocol + ' ' +document.domain + ' : ' + location.port;
// var url = window.location.protocol +document.domain + ':' + location.port;
// const url = `http://${window.location.hostname}:${location.port}`;
// const url = `${window.location.protocol}${window.location.hostname}:${location.port}`;
// var url = 'http://192.168.55.102:8000'
// console.log('url pipony2',url)
// var socket = io.connect(url);
// console.log('socket',socket)

var socket = io();
socket.on('room', msg => console.log('room ', msg))
socket.on('pipony moved', msg => console.log('pipony moved ', msg))


$(".pipony2 button").click(function(e) {
  var url = 'http://192.168.55.102:8000'
  console.log('url pipony1',url)
  var socket = io.connect(url);
  console.log('socket',socket)

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
  var url = 'http://192.168.55.106:8000'
  console.log('url pipony6',url)
  var socket = io.connect(url);
  console.log('socket',socket)

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

$(".pipony1 button").click(function(e) {
  var url = 'http://192.168.55.101:8000'
  console.log('url pipony3',url)
  var socket = io.connect(url);
  console.log('socket',socket)

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

