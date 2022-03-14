/* =====================

# Exercise: FizzBuzz

## Introduction

Step 1: Write a program that uses console.log to print each of the numbers from 1 to 100.

Step 2: Update the program so that, for multiples of three, it prints "Fizz" instead
of the number and, for multiples of five, it prints "Buzz" instead of the number.

Step 3: For numbers which are multiples of *both* three and five, make the program
print "FizzBuzz" instead of "Fizz" or "Buzz".

Hint 1. Remember that you can use conditionals to /conditionally/ change a program's behavior
Hint 2. Consider how modulo (calculating the remainder of a division problem) might be useful

Believe it or not, this is a common programming challenge in job interviews!

===================== */

/* =====================

Start code

===================== */

 // Step1:Display 1 to 100.
for (let i = 0; i < 101; i++) {
 console.log(i);
}


 // Step2-1 :Display multiples of three
for(var n = 0; n <= 100; n+=3){
  console.log(n)
}

// Step2-2 :Display multiples of five
for(var n = 0; n <= 100; n+=5){
  console.log(n)
}

// Step2-3 :Another syntax
var x;
for(x = 0; x <= 100; x++){
if(x % 3 == 0){
document.write(x);
  }
}

// Step3 multiples of *both* three and five
var y;
for(y = 0; x <= 100; x++){
if(y % 3 == 0 || y % 5 == 0){
document.write(y);
  }
}


/* =====================

End code

===================== */
