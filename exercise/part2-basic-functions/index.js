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

<<<<<<< HEAD
let age = (birthYear) => {
    return 2022 - birthYear;
};
=======
let age = (birthYear) =>  2022 - birthYear;
>>>>>>> 8711eec98d9a650379ae534c90c894ae49b52040

console.log('age success:', age(1971) === 51);

/* =====================
Instructions: Write a function that adds one to the number provided
Example: "plusOne(2) should return 3"
===================== */

<<<<<<< HEAD
let plusOne = (x) => {
  return x + 1;
};
=======
let plusOne = (i) => i + 1;
>>>>>>> 8711eec98d9a650379ae534c90c894ae49b52040

console.log('plusOne success:', plusOne(99) === 100);

/* =====================
Instructions: Write a function that multiplies the number provided by three
Example: "timesThree(2) should return 6"
===================== */

<<<<<<< HEAD
let timesThree = (x) => {
  return x * 3
};
=======
let timesThree = (a) => a * 3;
>>>>>>> 8711eec98d9a650379ae534c90c894ae49b52040

console.log('timesThree success:', timesThree(33) === 99);

/* =====================
Instructions: Write a function that adds two given numbers
Example: "add(2, 3) should return 5"
===================== */

<<<<<<< HEAD
let add = (x,y) => {
  return x + y
};
=======
let add = (a, b) => a + b;
>>>>>>> 8711eec98d9a650379ae534c90c894ae49b52040

console.log('add success:', add(4, 6) === 10);

/* =====================
Instructions: Write a function that multiplies two given numbers
Example: "multiply(2, 3) should return 6"
===================== */

<<<<<<< HEAD
let multiply = (a,b) => {
  return a * b
};
=======
let multiply = (a, b) => a * b;
>>>>>>> 8711eec98d9a650379ae534c90c894ae49b52040

console.log('multiply success:', multiply(4, 6) === 24);

/* =====================
Instructions: "Write a function that returns the value of an array at a specified index"
Example: "valueAtIndex(['Mercury', 'Venus', 'Earth', 'Mars'], 2) should return 'Earth'"
===================== */

<<<<<<< HEAD
let valueAtIndex = (array,b) => {
  return array[b]
};
=======
let valueAtIndex = (arr, index) => arr[index];
>>>>>>> 8711eec98d9a650379ae534c90c894ae49b52040

console.log('valueAtIndex success:', valueAtIndex([9, 8, 7, 6, 5], 2) === 7);

/* =====================
Instructions: "Write a function that returns the value of an object at a specified key"
Example: "valueAtKey({'name': 'Nathan'}, 'name') should return 'Nathan'"
===================== */

let valueAtKey = (obj, keyName) => return obj[keyName];

console.log('valueAtKey success:', valueAtKey({ foo: 'bar' }, 'foo') === 'bar');

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

let isEven = (a) => a % 2 === 0;
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd.
===================== */

let isOdd = (a) => a % 2 !== 0;

console.log('isOdd success:', isOdd(4) === false && isOdd(5) === true);
