// Like http-collect, but using three URLs as input

var http = require('http'), urlArray = [process.argv[2], process.argv[3], process.argv[4]]

for (url in urlArray) {}
http.get(url, function cb (response){
  // Collect all data from the server, not just 'data' event
  // Needs to be a string
  response.setEncoding('utf8')
  var streamCollection = ''
  response.on('data', function (data){
    // Add to data string
    streamCollection = streamCollection + data
  });

  response.on('end', function(){
    // Print String of characters
    console.log(streamCollection)
  });
});
