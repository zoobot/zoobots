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

## TODO on Raspberry Pi
* Open Terminal and type sudo raspi-config
* change password
* hostname
* Interfacing Options
* Enable Camera
* Enable SSH
* Enable VNC
* ssh or vnc to Raspberry Pi

## RUN Nginx on localhost FIRST!!
* git clone https://github.com/zoobot/zoobot.git
* cd zoobot
* change upstream ip addresses to match robots on nginx.conf line 15
* change ip addresses to match robots on nginx.conf line 15
* change ip addresses in static/sockets-motors.js also make this code better
* sudo nginx -c /Users/username/fullpath/zoobot/pipony/nginx.conf
#### or To restart nginx and kill all older PIDs
* sudo kill $(ps aux | grep nginx | awk '{print $2}');sudo nginx -c /Users/ki/Desktop/ROBOTS/internet_of_robots/zoobot/pipony/nginx.conf


Arp-scan for Raspberry Pi's. They all have b8:27:eb mac address prefixed.
sudo /usr/local/bin/arp-scan --ignoredups --localnet |grep "b8:27:eb:" | awk '{print $1}' > test.txt;cat test.txt

## SSH to your Pi Robot
* ssh pi@ip
* git clone https://github.com/zoobot/zoobot.git
##  install dependencies
* sudo pip install Flask python-socketio eventlet for Flask or npm install for node
## Run the Flask Server or Node server depending on which robot##
* python server-pipony.py
* node server/server-all.js