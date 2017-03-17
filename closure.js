// Closures
function makeAdder(a) {
    return function (b) {
        return a + b;
    };
}

//makeAdder function is intialized with passed in parameter a as 5
var x = makeAdder(5);

//makeAdder function is intialized with passed in parameter a as 20
var y = makeAdder(20);

//x(6) calls the inner function as a=5, b = 6 and returns the result.
console.log(x(6));

//x(6) calls the inner function as a=20, b = 6 and returns the result.
console.log(y(7));
console.log(x(8));

//Practical Example of Closures
function Zoomer(size) {
    return function () {
        document.getElementById('resize').style.fontSize = size + 'px';
    };
}

var size12 = Zoomer(12);
var size20 = Zoomer(20);
var size30 = Zoomer(30);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-20').onclick = size20;
document.getElementById('size-30').onclick = size30;
