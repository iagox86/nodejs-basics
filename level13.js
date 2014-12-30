var http   = require('http');
var url    = require('url');
var moment = require('moment');

var port = Number(process.argv[2]);

var server = http.createServer(function(request, response) {
  var request = url.parse(request.url, true);
  var date = moment(request.query['iso'])

  response.writeHead(200, { 'Content-type': 'application/json', 'Connection': 'close' });

  if(request.pathname == "/api/parsetime") {
    response.write(JSON.stringify({ "hour": date.hour(), "minute": date.minute(), "second": date.second() }));
  } else if(request.pathname == "/api/unixtime") {
    response.write(JSON.stringify({ "unixtime": date.valueOf() }));
  } else {
    response.write("FAIL");
  }

  response.end();
});

server.listen(port);
