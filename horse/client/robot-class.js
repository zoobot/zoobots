var Robot = function(urls) {
  this.buttonIds = ['left','right','forward','back','stop']
  this.socket = io();
  this.urls = urls
  this.make(this.urls)
}

Robot.prototype.createRobot = function(robotName) {
    var robots = document.getElementsById('robots')
    var robot = document.createElement('div');
    robot.setAttribute('id', robotName)
    robot.setAttribute('class', robotName)
    robots.appendChild(robot);
}

Robot.prototype.createButtons = function(robotName, buttonName) {
  var robot = document.getElementsById(robotName)
  var robotButton = document.createElement('button');
  robotButton.setAttribute('id', buttonName);
  robotButton.setAttribute('class', buttonName);
  robotButton.setAttribute('onclick', this.emitter());
  robot.appendChild(robotButton);
}

Robot.prototype.emitter = function(e) {
  this.socket = io.connect(url)
  socket.emit(e.currentTarget.className)
}

Robot.prototype.make = function(urls) {
  urls.forEach(i) {
    this.createRobot(urls['i'])
    this.buttonIds.forEach(buttonName => {
      this.createButtons(urls['i'], buttonName)
    })
  }
}

let robots
let urls =  {
  'pipony1':'http://192.168.55.102:8000',
  'pipony2':'http://192.168.55.103:8000',
  'pipony3':'http://192.168.55.104:8000',
  'pipony6':'http://192.168.55.108:8000',
  }

let init = function () {
  robots = new Robot(urls)
}


if (!!(window.addEventListener))
  window.addEventListener("DOMContentLoaded", init)
else
  window.attachEvent("onload", init)