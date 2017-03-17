// If you declare a variable, without using "var", the variable always becomes GLOBAL.
x=0;
var dataTypes=["Number","String", "Boolean", "Objects", "null", "undefined"];
var para = document.createElement("p");
 var br = document.createElement("br");
for(let i=0; i<dataTypes.length; i++)
{
var node = document.createTextNode(dataTypes[i]);
para.appendChild(node);
para.appendChild(document.createElement("br"));
var element = document.getElementById("datatype");
element.appendChild(para);
}



