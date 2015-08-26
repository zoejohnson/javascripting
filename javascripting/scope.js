// Global and local scope. Lexical scoping: Nested
// functions have access to their parent function's
// scope.

var a = 1, b = 2, c = 3;

(function firstFunction(){
  var b = 5, c = 6;

  (function secondFunction(){
    var b = 8;
    console.log("a: "+a+", b: "+b+",c: "+c);
    (function thirdFunction(){
      var a = 7, c = 9;

      (function fourthFunction(){
        var a = 1, c = 8;

      })();
    })();
  })();
})();

// Should print: "a: 1, b: 8, c: 6"
