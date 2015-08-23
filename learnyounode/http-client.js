// Write a program that performs an HTTP GET request to a URL
// provided to you as the first command-line argument. Write
// the String contents of each "data" event from the response
// to a new line on the console.

var http = require('http'), url = process.argv[2]

http.get(url, function callback (response) { // response is a Stream object
  // need to convert data to String
  response.setEncoding('utf8')
  // 'Listen' to the data event
  response.on('data', function (data) {

    // need to print data contents on new lines to console
    console.log(data)
  })
});


// Their official solution:
// var http = require('http')
//
//    http.get(process.argv[2], function (response) {
//      response.setEncoding('utf8')
//      response.on('data', console.log)
//      response.on('error', console.error)
//    })

// How do I know to add an error?
