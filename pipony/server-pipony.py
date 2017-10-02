import socketio
import eventlet
import RPi.GPIO as GPIO
from time import sleep
# from flask import Flask, render_template
from flask import Flask, request, send_from_directory

io = socketio.Server()
app = Flask(__name__)

# Set the GPIO mode
GPIO.setmode(GPIO.BCM)

# Define GPIO pins
Motor1A = 27
Motor1B = 24
Motor1Enable = 5

GPIO.setup(Motor1A,GPIO.OUT)
GPIO.setup(Motor1B,GPIO.OUT)
GPIO.setup(Motor1Enable,GPIO.OUT)

# @app.route('/')
# def index():
#     """Serve the client-side application."""
#     return render_template('client/index.html')

#use this for local static file server
#don't need it with remote nginx frontend
# @app.route('/<path:path>', methods=['POST', 'GET'])
# def serve_page(path):
#   # return index for get
#   return send_from_directory('static', path)

@io.on('connect')
def connect(sid, environ):
    print('connect ', sid)

# @io.on('my message')
# def message(sid, data):
#     print('message ', data)

@io.on('robot-forward')
def message(sid):
    # Turn the motor on
    GPIO.output(Motor1A,GPIO.HIGH) # GPIO high to send power to the + terminal
    GPIO.output(Motor1B,GPIO.LOW) # GPIO low to ground the - terminal
    GPIO.output(Motor1Enable,GPIO.HIGH) # GPIO high to enable this motor
    print('message ', sid)

@io.on('robot-back')
def message(sid):
    GPIO.output(Motor1A,GPIO.LOW) # GPIO high to send power to the + terminal
    GPIO.output(Motor1B,GPIO.HIGH) # GPIO low to ground the - terminal
    GPIO.output(Motor1Enable,GPIO.HIGH) # GPIO high to enable this motor
    print('message ', sid)

@io.on('robot-stop')
def message(sid):
    # Stop the motor by 'turning off' the enable GPIO pin
    GPIO.output(Motor1Enable,GPIO.LOW)
    print('message ', sid)


@io.on('disconnect')
def disconnect(sid):
    # Always end this script by cleaning the GPIO
    GPIO.cleanup()
    print('disconnect ', sid)

if __name__ == '__main__':
    # wrap Flask application with socketio's middleware
    app = socketio.Middleware(io, app)

    # deploy as an eventlet WSGI server
    eventlet.wsgi.server(eventlet.listen(('', 8000)), app)

try:
    main()
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()