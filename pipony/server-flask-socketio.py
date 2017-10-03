from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
sio = SocketIO(app)

@socketio.on('robot-back')
def handle_message(message):
    print('received message: ' + message)

@socketio.on('robot-forward')
def handle_json(json):
    print('robot-forward: ' + str(json))

@socketio.on('robot-right')
def handle_message(message):
    send(message)

@socketio.on('robot-stop')
def handle_json(json):
    send(json, json=True)

@socketio.on('room')
def handle_my_custom_event(json):
    emit('room', json)

if __name__ == '__main__':
    sio.run(app)