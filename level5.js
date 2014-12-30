var fs = require('fs');

dir = process.argv[2];
extension = "." + process.argv[3];

fs.readdir(dir, function(err, data) {
  for(i in data) {
    file = data[i].toString();
    if(file.indexOf(extension, file.length - extension.length) != -1) {
      console.log(data[i]);
    }
  }
});
