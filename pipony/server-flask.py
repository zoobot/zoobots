import socketio
import eventlet
import eventlet.wsgi
from flask import Flask, request, send_from_directory

sio = socketio.Server()
app = Flask(__name__)

@app.route('/<path:path>', methods=['POST', 'GET'])
def serve_page(path):
  # return index for get
  return send_from_directory('static', path)

# @sio.on('connect', namespace='/chat')
@sio.on('robot-forward')
def connect(sid):
    print("forward ", sid)
    sio.emit('reply', room=sid)

@sio.on('robot-back')
def connect(sid):
    print("back ", sid)

@sio.on('robot-stop')
def connect(sid):
    print("stop ", sid)

@sio.on('disconnect')
def connect(sid):
    print("disconnect ", sid)

@sio.on('connect')
def message(sid, data):
    print("message ", data)
    sio.emit('reply', room=sid)


if __name__ == '__main__':
    # wrap Flask application with engineio's middleware
    app = socketio.Middleware(sio, app)

    # deploy as an eventlet WSGI server
    eventlet.wsgi.server(eventlet.listen(('', 8000)), app)