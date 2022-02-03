/* =====================
# Exercise: Basic Functions

Let's get a little more practice writing functions (we'll be using some of these
functions later on too ;-).
===================== */

/* =====================
Instructions: Write a function, age, that takes a birth year and returns an age
in years. (Let's just assume this person was born January 1 at 12:01 AM)
Example: "age(2000) should return 22"
===================== */
let Year = new Date().getFullYear();

let age = (birthYear) => {
  let outCome = Year - birthYear;
  return outCome;
};

console.log('age success:', age(1971) === 51);

/* =====================
Instructions: Write a function that adds one to the number provided
Example: "plusOne(2) should return 3"
===================== */

let plusOne = (num) => num + 1;

console.log('plusOne success:', plusOne(99) === 100);

/* =====================
Instructions: Write a function that multiplies the number provided by three
Example: "timesThree(2) should return 6"
===================== */

let timesThree = (num) => num * 3;

console.log('timesThree success:', timesThree(33) === 99);

/* =====================
Instructions: Write a function that adds two given numbers
Example: "add(2, 3) should return 5"
===================== */

let add = (a, b) => {
  let total = a + b;
  return total;
};

console.log('add success:', add(4, 6) === 10);

/* =====================
Instructions: Write a function that multiplies two given numbers
Example: "multiply(2, 3) should return 6"
===================== */

let multiply = (a, b) => {
  let total = a * b;
  return total;
};

console.log('multiply success:', multiply(4, 6) === 24);

/* =====================
Instructions: "Write a function that returns the value of an array at a specified index"
Example: "valueAtIndex(['Mercury', 'Venus', 'Earth', 'Mars'], 2) should return 'Earth'"
===================== */

let valueAtIndex = (list, index) => {
  let outCome = list[index];
  return outCome;
};

console.log('valueAtIndex success:', valueAtIndex([9, 8, 7, 6, 5], 2) === 7);

/* =====================
Instructions: "Write a function that returns the value of an object at a specified key"
Example: "valueAtKey({'name': 'Nathan'}, 'name') should return 'Nathan'"
===================== */

let valueAtKey = (objectHere, keyHere) => objectHere[keyHere];

console.log('valueAtKey success:', valueAtKey({ foo: 'bar' }) === 'bar');

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

let isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
  };

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd.
===================== */

let isOdd = (num) => {
  if (num % 2 === 0) {
    return false;
  } return true;
};

console.log('isOdd success:', isOdd(4) === false && isOdd(5) === true);
