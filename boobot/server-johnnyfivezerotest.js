//'use strict'
const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on('ready', () => {
  // Create an Led on pin 7 on header P1 (GPIO4) and strobe it on/off
  // (new five.Led('P1-7')).strobe();
  const led = new five.Led('P1-7');
  led.strobe(500);

  var motor1 = new five.Motor({
    pins: { dir: 'P1-13', cdir: 'P1-12', enable: 'P1-29', invertPWM: true, enableSoftPwm: true }
  });
  var motor2 = new five.Motor({
    pins: { dir: 'P1-15', cdir: 'P1-31', enable:  'P1-11', invertPWM: true, enableSoftPwm: true }
  });
  var motor3 = new five.Motor({
    pins: { dir: 'P1-36', cdir: 'P1-23', enable: 'P1-32', invertPWM: true, enableSoftPwm: true }
  });
  var motor4 = new five.Motor({
    pins: { dir: 'P1-12', cdir: 'P1-33', enable: 'P1-22', invertPWM: true, enableSoftPwm: true }
  });

  motor1.forward(150);
  motor3.reverse(150);
  motor4.reverse(150);

});

