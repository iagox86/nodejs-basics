var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
  fs.readdir(dir, function(err, list) {
    if(err) {
      callback(err)
    } else {
      result = [];

      list.forEach(function(file) {
        if(path.extname(file) === "." + extension) {
          result.push(file.toString());
        }

      })

      callback(null, result);
    }
  });
}

