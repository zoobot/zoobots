from flask import Flask, render_template
from flask_socketio import SocketIO
import flask.ext.socketio

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
sio = flask.ext.socketio.SocketIO(app)

@sio.on('robot-back')
def handle_message(message):
    print('received message: ' + message)

@sio.on('robot-forward')
def handle_json(json):
    print('robot-forward: ' + str(json))

@sio.on('robot-right')
def handle_message(message):
    send(message)

@sio.on('robot-stop')
def handle_json(json):
    send(json, json=True)

@sio.on('room')
def handle_my_custom_event(json):
    emit('room', json)

if __name__ == '__main__':
    sio.run(app, host=0.0.0.0, port=8000)