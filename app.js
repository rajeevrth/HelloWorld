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
dataTypes.splice(1,3);
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
var newArray=dataTypes.slice(1,3);
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


