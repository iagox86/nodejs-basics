var fs = require('fs');

file = fs.readFileSync(process.argv[2]);

console.log(file.toString().split("\n").length - 1);


