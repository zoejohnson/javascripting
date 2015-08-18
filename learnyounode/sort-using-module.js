var myModule = require('./make-it-modular.js');
var directoryToSearch = process.argv[2]
var fileExtension = process.argv[3]

myModule(directoryToSearch, fileExtension, function(err, filteredFiles){
  if (err){
    console.error;("DAMN, THERE WAS AN ERROR: ", err)
  } else {
    console.log(filteredFiles.join('\n'))
  }

});
