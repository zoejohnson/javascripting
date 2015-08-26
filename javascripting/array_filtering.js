var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(evenNumbers)

function evenNumbers (num) {
 return num % 2 === 0
}

console.log(filtered)
/*
#hoisting
#namedFunctions
#orderOfDefiningVariables
*/

//evenNumbers was a callback function?
