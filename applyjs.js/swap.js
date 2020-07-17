var a = 10;
var b = 20;

var temp = a;
a = b;
b = temp;

console.log("a: " + a + " ,, b: " + b);


var x = 2;
var y = 5;

x = x + y;
y = x - y;
x = x - y;

console.log("x: " + x + " ,, y: " + y);


var p = 100;
var q = 200;

[p , q] = [q , p]

console.log("p: " + p + " ,, q: " + q);