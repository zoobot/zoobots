import socketio
import eventlet
import eventlet.wsgi
import RPi.GPIO as GPIO
from time import sleep
from flask import Flask, request, send_from_directory
sio = socketio.Server()
app = Flask(__name__)

GPIO.setmode(GPIO.BCM)
    # Define GPIO pins
Motor1A = 27
Motor1B = 24
Motor1Enable = 5
GPIO.setup(Motor1A,GPIO.OUT)
GPIO.setup(Motor1B,GPIO.OUT)
GPIO.setup(Motor1Enable,GPIO.OUT)





@app.route('/<path:path>', methods=['POST', 'GET'])
def serve_page(path):
  return send_from_directory('static', path)

@sio.on('connect')
def connect(sid, data):
    print("connected ", data, sid)
    sio.emit('room', room=sid)

@sio.on('robot-forward')
def message(sid):
    # Turn the motor on
    GPIO.output(Motor1A,GPIO.HIGH) # GPIO high to send power to the + terminal
    GPIO.output(Motor1B,GPIO.LOW) # GPIO low to ground the - terminal
    GPIO.output(Motor1Enable,GPIO.HIGH) # GPIO high to enable this motor
    print('message ', sid)

@sio.on('robot-back')
def message(sid):
    GPIO.output(Motor1A,GPIO.LOW) # GPIO high to send power to the + terminal
    GPIO.output(Motor1B,GPIO.HIGH) # GPIO low to ground the - terminal
    GPIO.output(Motor1Enable,GPIO.HIGH) # GPIO high to enable this motor
    print('message ', sid)

@sio.on('robot-stop')
def message(sid):
    # Stop the motor by 'turning off' the enable GPIO pin
    GPIO.output(Motor1Enable,GPIO.LOW)
    print('message ', sid)


@sio.on('disconnect')
def disconnect(sid):
    GPIO.cleanup()
    print('disconnect ', sid)

def main():
    # wrap Flask application with engineio's middleware
    app = socketio.Middleware(sio, app)

    # deploy as an eventlet WSGI server
    eventlet.wsgi.server(eventlet.listen(('', 8000)), app)

if __name__ == '__main__':

    try:
        main()

    except KeyboardInterrupt:
        pass
    finally:
        GPIO.cleanup()
