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


function age(birthYear) {
  return 2022 - birthYear;
}

console.log('age success:', age(1971) === 51);

/* =====================
Instructions: Write a function that adds one to the number provided
Example: "plusOne(2) should return 3"
===================== */

function plusOne(number) {
  return number + 1;
}

console.log('plusOne success:', plusOne(99) === 100);

/* =====================
Instructions: Write a function that multiplies the number provided by three
Example: "timesThree(2) should return 6"
===================== */

function timesThree(number) {
  return number * 3;
}

console.log('timesThree success:', timesThree(33) === 99);

/* =====================
Instructions: Write a function that adds two given numbers
Example: "add(2, 3) should return 5"
===================== */

function add(num1, num2) {
  return num1 + num2;
}

console.log('add success:', add(4, 6) === 10);

/* =====================
Instructions: Write a function that multiplies two given numbers
Example: "multiply(2, 3) should return 6"
===================== */

function multiply(num1, num2) {
  return num1 * num2;
}

console.log('multiply success:', multiply(4, 6) === 24);

/* =====================
Instructions: "Write a function that returns the value of an array at a specified index"
Example: "valueAtIndex(['Mercury', 'Venus', 'Earth', 'Mars'], 2) should return 'Earth'"
===================== */

function valueAtIndex(array, index) {
  return array[index];
}

console.log('valueAtIndex success:', valueAtIndex([9, 8, 7, 6, 5], 2) === 7);

/* =====================
Instructions: "Write a function that returns the value of an object at a specified key"
Example: "valueAtKey({'name': 'Nathan'}, 'name') should return 'Nathan'"
===================== */

function valueAtKey(dict, key) {
  let value = dict[key];
  return value;
}

console.log('valueAtKey success:', valueAtKey({ 'foo': 'bar' }, 'foo') === 'bar');

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd.
===================== */

function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

console.log('isOdd success:', isOdd(4) === false && isOdd(5) === true);
