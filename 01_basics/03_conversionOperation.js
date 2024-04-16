let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/*
  "33" => 33
  "33abc" => NaN
  true =>1 ; false =>0
*/

let isLoggedIn = "Palaksh"

let booleanIsLoggedIn =Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
  1 => true ; 0 => false
  "" => false
  "Palaksh" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello"
let str2 = " Palaksh"

let str3 = str1 +str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(true);   => true
// console.log(+true);  => 1
// console.log(true+);  => Error
// console.log(+"");    => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++
++gameCounter
console.log(gameCounter);

/* 
   If used postfix, with operator after operand 
   (for example, x++), the increment operator 
   increments and returns the value before 
   incrementing.
*/

/* 
  If used prefix, with operator before operand 
  (for example, ++x), the increment operator 
  increments and returns the value after 
  incrementing.
*/

let x = 3;
const y = x++;

console.log("x = "+ x + " , y = "+y);

let a = 3;
const b = ++a;

console.log("a = "+ a + " , b = "+b);


