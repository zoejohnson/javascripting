// Write a program that uses a single asynchronous
// filesystem operation to read a file and print the number
// of new lines it contains to the console

var fs = require('fs')
// Collect the value from a callback function that you
// pass in as the second argument

function countLines (err, file){
  var splitLines = file.split('\n')
  console.log(splitLines.length - 1)
};

fs.readFile(process.argv[2], 'utf8', countLines);
