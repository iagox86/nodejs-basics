var fs = require('fs');

file = fs.readFile(process.argv[2], function(err, data) {
  if(err) {
    console.log("ERROR: " + data);
  } else {
    console.log(data.toString().split("\n").length - 1);
  }
});



