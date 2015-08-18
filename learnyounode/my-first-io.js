// Write a program that uses a single synchronous
// filesystem operation to read a file and print the
// number of newlines (\n) it contains to the console

// The file to read will be provided as the first command-line argument.

// Need the fs module, stored in a variable 'fs'
var fs = require('fs');

// To read a file, you'll need to use fs.readFileSync.('/path/to/file')
var readFilesBuffer = fs.readFileSync(process.argv[2]);
// That will return a Buffer object
  // The Buffer object is basically an array that holds everything in the file you just read.

// Convert the Buffer object to String so you can split later
var readFilesString = readFilesBuffer.toString();

// Split the String obj
var splitFilesArray = readFilesString.split('\n');

// Find and print the length of the split array
console.log(splitFilesArray.length - 1)
