# Zoobot
## Internet of Robots
The end goal of this project is a social network for robots. Ideally they will be able to share synthetic dataset libraries of point clouds, grasps, share natural language processing and interact through robot to robot and robot to human chat, and share image recognition libraries. I am still in experimenting mode and building out the infrastructure. I'd like to set up a front end framework and login system so that users can add their robots, right now the front end is vanilla Javascript with a simple Robot class to deal with the websockets. I've mostly been working the backend testing between node express vs flask servers on the robots.


## What are the different robots?
### Boobot
Boobot is a Node/Express server setup with Johnny-five testing. It is not completely working with Raspberry Pi Zero / MotoZero / Raspi-io library
### Horse
Horse has a working setup for Arduino, Raspberry Pi 3, and Johnny-Five , run this to get more than one robot communicating with loadbalancing
### Pipony
Pipony has a working setup for Raspberry Pi Zero W, MotoZero, Flask. It also has the working front end code and Nginx config for load balancing /running more than one robot at a time.

## TODO - near future
* login
* terrain mapping using pi cam
* redis for subpub
* mongo for accounts


### Talks
Hackaday Super Conference 2017 Los Angeles
Hardware Developer's Didactic Galactic Meetup 2017 San Francisco
Women Who Code Conference 2017 San Francisco
