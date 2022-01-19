// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const a = 5;
const b = 10;
let c = a + b;
//Expected outut 15
console.log("Original output: " + c);

let= 20;

//Expected output 30, but it's actually still 15
console.log("After 'a' has been updated: " + c)

function sayHey(){
    console.log("Hey!");
}

sayHey();

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}

function futureAge( name, age){
const answer = age + 5;
return name + " will be " + answer + " in 5 years! ";
}
console.log(futureAge("Mary" , 24))