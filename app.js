// If you declare a variable, without using "var", the variable always becomes GLOBAL.
x = 0;
var dataTypes = ["Number", "String", "Boolean", "Objects", "null", "undefined"];
var para = document.createElement("p");
var br = document.createElement("br");
for (let i = 0; i < dataTypes.length; i++) {
    var node = document.createTextNode(dataTypes[i]);
    para.appendChild(node);
    para.appendChild(document.createElement("br"));
    var element = document.getElementById("datatype");
    element.appendChild(para);
}

// Array<string>.splice(start: number, deleteCount?: number)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
dataTypes.splice(1, 3);
console.log(dataTypes);
//Output : 
// 0
// :
// "Number"
// 1
// :
// "null"
// 2
// :
// "undefined"
// length
// :
// 3

dataTypes.push("String", "Boolean", "Objects");

// Array<string>.slice(start?: number, end?: number)
// Returns a section of an array.
var newArray = dataTypes.slice(1, 3);
console.log(newArray);
// Output:
// 0
// :
// "null"
// 1
// :
// "undefined"
// length
// :
// 2

// Spread syntax.
function Avg(...args) {
    let sum = 0;
    for (let val of args) {
        sum = + val;
    }
    sum = sum / args.length;
    console.log(sum);
}
// In the above code the variable args holds all the values that were passed into the function. 
Avg(2, 3, 5);

// anonymous functions.
var average = function (a, b, c) {
    let sum = 0;
    sum = a + b + c / 3;
    return sum;
}
console.log(average(2, 3, 4))

// Inner functions
// JavaScript function declarations are allowed inside other functions. 
function betterExampleNeeded() {
  var a = 1;
  function oneMoreThanA() {
    return a + 1;
  }
  return oneMoreThanA();
}

betterExampleNeeded();

