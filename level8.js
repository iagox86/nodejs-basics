var http = require('http');
var bl = require('bl');



http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    console.log(data.length);
    console.log(data.toString());
  }));
//  collected = "";
//
//  response.on("data", function(data) {
//    collected += data
//  });
//
//  response.on("error", function(data) {
//    console.error(error);
//    return
//  });
//
//  response.on("end", function() {
//    console.log(collected.length);
//    console.log(collected);
//  });
});
