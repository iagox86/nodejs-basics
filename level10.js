net = require('net');
moment = require('moment');

function getDate() {
  return moment().format("YYYY-MM-DD HH:mm");
}

var port = Number(process.argv[2]);

var server = net.createServer(function(socket) {
  socket.write(getDate());
  socket.end();
});

server.listen(port);
