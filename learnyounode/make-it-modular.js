var fs = require('fs')
var pathModule = require('path')


function moduleVersionOfSort (directory, extension, cb) {
  fs.readdir(directory, function listFilesByExtension (err, filenames){
    if (err) {
      cb(err, null)
      return
    }

    var filteredFiles = filenames.filter(function isExtension (file){
      return pathModule.extname(file) === "." + extension;
    })

    cb(null, filteredFiles)
  });
}

module.exports = moduleVersionOfSort
