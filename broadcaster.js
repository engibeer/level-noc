var zmq = require('zmq')
  , zsock = zmq.socket('pull');

var express = require('express');

var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server, { log: false });

app.get('/', function(req,res) {
	res.sendfile('index.html');
});

app.use("/static", express.static(__dirname + '/static'));

server.listen(8080);

zsock.connect('tcp://*:5555');
console.log('Worker connected to fft feed');

// broadcast received zmq message
io.sockets.on('connection', function(socket){
	console.log('connected');
	zsock.on('message', function(msg){
  		socket.broadcast.emit('fft_data', msg.toString() );
	});
})

