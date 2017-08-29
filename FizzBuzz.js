
// //REFACTORED version of the good ol' fizzbuzz
//Creating the function that creates the main variables
function fizzBuzz(object, limit) {
  for (var i=1;i<=limit;i++) {
    var stringtoPrint=concatString(object, i)
    printString(i, stringtoPrint);
  }
}
//Need a function to concat the string
function concatString(object, i) {
  var stringtoReturn = ""
  Object.keys(object).forEach(function(key) {
    if (i % key === 0) {
      stringtoReturn=stringtoReturn.concat(object[key])
    }
  });
  return stringtoReturn
}
//Need a function(if/else)to print the String
function printString(i, stringtoPrint){
  if(stringtoPrint === "") {
    console.log(i)
  }else{
    console.log(stringtoPrint)
  }
}

//When a variable is relevant, I want to print the value
fizzBuzz({
  3: "fizz",
  4: "pop",
  5: "buzz",
  7: "crack",
  13: "onomatopoeia"
}, 50)
