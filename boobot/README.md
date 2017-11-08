# Boobot
## Internet of Robots Demo
### Hackaday Super Conference 2017 Los Angeles
* Boobot: https://www.youtube.com/watch?v=b6idybwhbCs

# Hardware
Raspberry Pi Zero, MotoZero, batteries, motors, sensors

# Software
Raspbian, Socket.io, NGinx, Flask??, Johnny-five??


# How to Links
* Nginx: https://www.nginx.com/resources/admin-guide/load-balancer/
* Node.js: https://nodejs.org/en/
* Socket.io: http://python-socketio.readthedocs.io/en/latest/
* Raspberry Pi: https://www.raspberrypi.org/
* Motion Sensor: http://www.jameco.com/z/555-28027-Parallax-PIR-Sensor-Rev-B-_2082927.html
* MotoZero motor driver: https://thepihut.com/products/motozero

## Setup on Raspberry Pi Back End Server
* On initial setup, use monitor and keyboard to setup pi
* Open Terminal and type sudo raspi-config
* change password
* hostname
* Interfacing Options
* Enable Camera
* Enable SSH
* Enable VNC
* ssh or vnc to Raspberry Pi
* git clone https://github.com/zoobot/zoobot.git
* cd zoobot/boobot
* sudo pip install Flask python-socketio eventlet for pipony
* npm install for nodebot

## TODO on Front End Server
* git clone https://github.com/zoobot/zoobot.git
* cd zoobot

#### Arp-scan for Raspberry Pi's. Pi's have b8:27:eb mac address prefixed.
* sudo /usr/local/bin/arp-scan --ignoredups --localnet |grep "b8:27:eb:" | awk '{print $1}' > test.txt;cat test.txt
* set upstream ip addresses to match robots in nginx.conf
* set ip addresses in static/url-conf.js

#### Start nginx
* sudo nginx -c /Users/ki/Desktop/ROBOTS/internet_of_robots/zoobot/pipony/nginx.conf

#### Restart nginx and kill all older PIDs
* sudo kill $(ps aux | grep nginx | awk '{print $2}');sudo nginx -c /Users/ki/Desktop/ROBOTS/internet_of_robots/zoobot/pipony/nginx.conf

## TODO on Raspberry Pi Back End Server
* ssh pi@ip's from arp-scan
* git pull to pull down updated code to the robots if needed
* python server-pipony.py
* node server/server-all.js