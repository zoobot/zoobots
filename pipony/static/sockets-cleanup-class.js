var Robot = function(urls) {
  this.buttonIds = ['left','right','forward','back','stop']
  this.socket = io();
  this.urls = urls
  console.log(urls)
  this.make(urls)
}

Robot.prototype.createRobot = function(robotName) {
    var robots = document.getElementById('robots')
    var robot = document.createElement('div');
    robot.setAttribute('id', robotName)
    robot.setAttribute('class', robotName)
    robots.appendChild(robot);
}

Robot.prototype.createButtons = function(robotName, buttonName) {
  var robot = document.getElementById(robotName)
  var robotButton = document.createElement('button');
  robotButton.setAttribute('id', buttonName);
  robotButton.setAttribute('class', buttonName);
  robotButton.setAttribute('name', buttonName);
  robotButton.textContent = buttonName.toUpperCase()
  // robotButton.setAttribute('onclick', this.emitter(robotName,buttonName));
  robotButton.addEventListener('click', 'this.emitter(robotName,buttonName)');
  robot.appendChild(robotButton);
}

Robot.prototype.emitter = function(robotName, buttonName) {
  // console.log(this.urls[robotName])
  this.socket = io.connect(this.urls.robotName)
  this.socket.emit(buttonName)
}

Robot.prototype.make = function(urls) {
  Object.keys(urls).map((objectKey, index) => {
    this.createRobot(objectKey)
    this.buttonIds.forEach(buttonName => {
      this.createButtons(objectKey, buttonName)
    })
  });
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