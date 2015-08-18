// Write a program that accepts one or more numbers as command-line
// arguments and prints the sum of those numbers to the console (stdout).

var inputArray = process.argv
var justTheNumbers = inputArray.splice(2, inputArray.length)
justTheNumbers = justTheNumbers.map(Number);
// Number is a 'constructor', which means it creates objects.
// ...which makes it hella slow
// *'new' keyword

var addedInputNumbers = justTheNumbers.reduce(function add (a, b){
  return a + b
}, 0); // 0 as the second argument, as a number to start adding to.

console.log(addedInputNumbers);
