var mymod = require('./level6-mod.js');

mymod(process.argv[2], process.argv[3], function(err, data) {
  if(err) {
    console.log("ERROR: " + err);
  } else {
    console.log(data.join("\n"));
  }
})
