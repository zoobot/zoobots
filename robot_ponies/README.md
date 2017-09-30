# Zoobot
## Internet of Robots Demo
## Hardware Developer's Didactic Galactic (HDDG)

# Hardware
Raspberry Pi Zero, MotoZero, monitor, keyboard, mouse, wifi adapter if you use earlier than Raspberry Pi3, usb cable
Arduino, LED, motion sensor, LED, gear motors,
Motor shield supported by Johnny-five
Power supply or separate battery for logic and motors

# Software
Raspbian, Flast, Socket.io, Ngrok

# Links
* Node.js: https://nodejs.org/en/
* Socket.io: http://python-socketio.readthedocs.io/en/latest/
* Raspberry Pi: https://www.raspberrypi.org/
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

### to clone microsd on osx
diskutil list
diskutil unmountDisk /dev/disk2
sudo newfs_msdos -F 16 /dev/disk2
sudo dd if=~/Desktop/raspberrypi.dmg of=/dev/disk2

### Electronics ##
* Solder all parts
* Connect Raspberry Pi Zero to MotoZero

### Install Dependencies
* git clone https://github.com/zoobot/Zoobot.git

### Run the Server ##
* python server/server-pipony.py
* Open a browser on http://localhost:3000 or use Ngrok for external access

### Slides with more depth
*