// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files. You will be provided a directory
// name as the first argument to your program (e.g. '/path/to/dir/') and
// a file extension to filter by as the second argument.

var fs = require('fs')
var pathModule = require('path')

var directoryToSearch = process.argv[2]
var fileExtension = process.argv[3]

function listFilesByExtension (err, filenames){
  var filteredFiles = filenames.filter(function isExtension (file){
    return pathModule.extname(file) === "." + fileExtension;
  });

  console.log(filteredFiles.join('\n'))
};

fs.readdir( directoryToSearch, listFilesByExtension) //readdir gives me the filenames
