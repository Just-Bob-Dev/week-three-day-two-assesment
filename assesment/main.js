// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(x, y){
    if(x > y){
      return x;
    }else {
      return y;
    }
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(x, y, z){ //x = 3, y =2, z=4
    if(x > y && x > z){
      return x;
    }else if (y > x && y > z) {
      return y;
    }else {
      return z;
    }
}
console.log(maxOfThree(3, 4, 2));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    if(char === "a" || char === "e" || char === "i" || char === "u"  || char === "u" ){
      return true;
    }else {
      return false;
    }
}
var a = "a";
console.log(isVowel(a));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(x,y){
  let s = x + y;
  return s;
}
console.log(sum(3, 4));



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function average(a, b, c){
  let ave = (a + b + c)/3;
  return ave;
}
console.log(average(2, 5, 8));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(a){
  let lgth = a;
  lgth.match(/.{1,1}/g);
  console.log(lgth.length);
}
var string = "strings";
getLength(string);


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(a , b){
  if(a > b){
    return true;
  }else {
    return false;
  }
}
console.log(greaterThan(3, 4));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name){
  name = String(name);
  return "Hello, " + name + "!";
}
var char = "harlie";
console.log(greet(char));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(a, b, c, d, e, f){
  let mad = "The " + a + " has eaten my " + b + " again, why didn't we get " + c + " trained last " + d + ". I hope " +e+ " can help. I asked " +f+ " and apparently she's pretty good."
  return mad;
}
var a = "dog";
var b = "homework";
var c = "carlos";
var d = "summer";
var e = "Susan";
var f = "tree";

console.log(madlib(a, b, c, d, e, f));
