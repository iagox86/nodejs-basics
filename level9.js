var http = require('http');
var bl = require('bl');

args = process.argv;
args.shift();
args.shift();

responses = {};
finished = {};

args.forEach(function(site) {
  http.get(site, function(response) {
    responses[site] = "";
    finished[site] = false;

    response.on("data", function(data) {
      responses[site] += data
    });

    response.on("error", function(data) {
      console.error(error);
      return
    });

    response.on("end", function() {
      finished[site] = true;
    });
  });
});

setInterval(function() {
  is_finished = true;

  args.forEach(function(site) {
    if(!finished[site]) {
      //console.log("Still waiting on " + site + "...");
      is_finished = false;
    }
  })

  if(is_finished) {
    //console.log(responses);
    args.forEach(function(site) {
      console.log(responses[site]);
    });

    process.exit();
  }
}, 1000);
