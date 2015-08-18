var pets = ['cat', 'dog', 'rat'];

pets = pets.map(function pluralize (pet) {
  return pet + "s";
})

// for (var i = 0; i < pets.length; i++) {
//   pets[i] = pets[i] + "s";
// }
// ^the map fcn + defining your own function is more
// efficient than the for loop. This is because you
// can pass other data structures to your fcn, whereas
// with the for loop, you're stuck working on lists.

console.log(pets)
