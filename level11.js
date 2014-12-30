fs = require('fs');
http = require('http');

var port = Number(process.argv[2]);
var filename = process.argv[3];

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-type': 'text/plain', 'Connection': 'close' });
  file = fs.createReadStream(filename)
  file.pipe(response);
});

server.listen(port);
