"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using nodejs, not browser

console.log(3
    +
    3) // code readibility should be high

console.log("Palaksh")

let name = "Palaksh"
let age = 19
let isLoggedIn = true
let state = null


// primitive datatypes

   // number => 2 to power 53
   // bigint 
   // String => ""
   // boolean => true or false , ha ya naa
   // null
   // undefined =>
   // symbol => unique

// object


console.log(typeof undefined);
console.log(typeof null);

// Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// BigInt

const bigNumber = 34567889527326737264343n

console.log(typeof bigNumber);
console.log(bigNumber);

// Arrays

const heros = ["shaktiman","nagraj","Palaksh"]

// Objects

let myObj = {
    name: "Palaksh",
    age: 20,
}

// Functions

const myFunction = function(){
    console.log("Hello World");
}