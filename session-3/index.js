// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const a = 5;
const b = 10;
let c = a + b;
//Expected outut 15
console.log("Original output: " + c);

a= 20;

//Expected output 30, but it's actually still 15
console.log("After 'a' has been updated: " + c)

c = a + b;
