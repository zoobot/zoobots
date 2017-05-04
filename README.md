# Zoobot
## Internet of Robots Demo
## Women Who Code Connect 2017
## #WeRise

# Hardware
Raspberry Pi, micro SD card, monitor, keyboard, mouse, wifi adapter if you use earlier than Raspberry Pi3, usb cable
Arduino, LED, motion sensor, LED, gear motors,
Motor shield supported by Johnny-five
Power supply or separate battery for logic and motors

# Software
Raspbian, Node.js, Express, Johnny-five, Socket.io, Ngrok

# Links
* Node.js: https://nodejs.org/en/
* Socket.io: http://socket.io/get-started/chat/
* Johnny-Five: http://johnny-five.io/
* Raspberry Pi: https://www.raspberrypi.org/
* Arduino https://www.arduino.cc/
* Ngrok: https://ngrok.com/
* Motion Sensor: http://www.jameco.com/
z/555-28027-Parallax-PIR-Sensor-Rev-B-_2082927.html

# Installing Raspbian OS using Etcher
* Connect the SD card reader with the SD card inside. Format as FAT32.
* Download and install Etcher
* Open Etcher.app
* Select the .img and SD card
* Flash!
* Eject from Mac
* Insert SD into Raspberry Pi
* Boot!
* Connect to Wifi
* Enable SSH
* Install VNC - Chicken of the VNC or TightVNC
* ssh or vnc to Raspberry Pi

### Electronics ##
* Connect the Arduino to Raspberry Pi via USB
* Connect motor controller
* Connect motors to motor controller and power
* Connect LED positive to Arduino port 13
* Connect Motion Sensor positive to Arduino port 3


### Install Dependencies
* git clone https://github.com/zoobot/Zoobot.git
* npm install

### Run the Server ##
* node server-all.js
* Open a browser on http://localhost:3000 or use Ngrok for external access

### Slides with more depth
* https://docs.google.com/presentation/d/1rDXaXQzcvEyW1z1uiZOrreTGZcfMhRk8_wiKOiknt8U/edit?usp=sharing