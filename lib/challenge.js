////////////////////////////////////
// READ THE INSTRUCTIONS BELOW BEFORE STARTING!
////////////////////////////////////
/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * The loops are wrapped in functions for testing purposes. Please do not modify the names of the functions.
 *
 * Test your output in the browser by commenting in and out the function call (aka invocation), e.g., "prompt1()"
 *
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number (including 0 and 10).
 */

// The first one has been done for you as an example!
function prompt1() {
  //   for (let i = 0; i <= 10; i++) {
  //     console.log(i);
  //   }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt1()

// 🌟 MAKE A COMMIT: "Complete prompt 1"

/*
 * Prompt 2:
 *
 * Create a loop that prints every even number BETWEEN 0 and 100 (not including 0 or 100).
 */

function prompt2() {
  // for (let i = 0; i < 99; i++) {
  //   if (i % 2 === 0) {
  //     console.log(i);
  //   } else {
  //   }
  // }
}


// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt2();

// 🌟 MAKE A COMMIT: "Complete prompt 2"

/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number (including -5 and 5).
 */

let negativeFive = -5;
function prompt3() {
  // while (negativeFive < 6) {
  //   console.log(negativeFive);
  //   negativeFive += 1;
  // }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt3()

// 🌟 MAKE A COMMIT: "Complete prompt 3"

/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number (including 10 and 0).
 */

function prompt4() {
  // for (let i = 10; i >= 0; i--) {
  //   console.log(i);
  // }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt4()

// 🌟 MAKE A COMMIT: "Complete prompt 4"

/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number (including 5 and -5).
 */
function prompt5() {
  // let i = 5;
  // while (i >= -5) {
  //   console.log(i);
  //   i -= 1;
  // }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt5()

// 🌟 MAKE A COMMIT: "Complete prompt 5"

/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 (inclusive) in multiples of 2 (instead of 1),
 * printing each number.
 */

function prompt6() {
  // for (let i = 0; i <= 50; i++) {
  //   if (i % 2 === 0 || i === 0) {
  //     console.log(i);
  //   } else {
  //   }
  // }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt6()

// 🌟 MAKE A COMMIT: "Complete prompt 6"

/*
 * Prompt 7:
 *
 * For the numbers 0 - 100 (inclusive), print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output IN THE BROWSER:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */
function prompt7() {
  // for (let i = 0; i <= 100; i++) {
  //   if (i % 5 === 0) {
  //     console.log(`I found a ${i}. High five!`);
  //   } else {

  //   }
  // }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt7()

// 🌟 MAKE A COMMIT: "Complete prompt 7"

/*
 * Prompt 8:
 *
 * Create a variable called someNumber and assign it a random number between
 * 0 and 100 (not inclusive). Hint: Use Math.random so that it generates a new number every time the code is run!
 *
 * Create a conditional that matches these requirements:
 *   - if someNumber is less than 30, print "That's a small number!"
 *   - if someNumber is between 30 and 60, print "The number is medium sized."
 *   - if someNumber is greater than 60, print "We got a big one!"
 */

//  define someNumber here

function getRandomArbitrary(min, max) {
  let randomNumber = Math.random();
  if (randomNumber === 0) {
    randomNumber += 1;
    return Math.floor(randomNumber * (max - min) + min);
  } else {
    return Math.floor(randomNumber * (max - min) + min);
  }
}
let someNumber = getRandomArbitrary(1, 99);

function prompt8() {
  // print someNumber to the console in your function so you can see its value
  // console.log(someNumber);
  // if (someNumber < 30) {
  //   console.log("That's a small number!");
  // } else if (someNumber > 30 && someNumber < 60) {
  //   console.log("The number is medium-sized.");
  // } else if (someNumber > 60) {
  //   console.log("We've got a big one!");
  // } else {
  //   console.log("30 or 60? Who cares?!");
  // }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt8();

// 🌟 MAKE A COMMIT: "Complete prompt 8"
// I drew from 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random' and 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor'.
// I was also interested in the fact that there is, allegedly, a very small chance that Math.random() can give back 0, so I wanted to account for that in my code, since the prompt did not want a zero included. I made it such that, on the off chance that math.random() gives back a 0, my function will add 1 to it and turn it into an integer within the parameters of the prompt. (I'm pretty sure that 0 will be turned into 99 once the function runs through). I also wanted an else statement in prompt8() to account for an occurrence of 30 or 60, which is not covered in the language of the prompt. <3 

/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 * i.e.:
 *  0. Han
 *  1. C3PO
 *  2. R2D2
 */

const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

function prompt9() {
  // for (let i = 0; i < starWars.length; i++) {
  //   console.log(starWars[i]);
  // }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt9();

// 🌟 MAKE A COMMIT: "Complete prompt 9"

/*
 * Prompt 10:
 *
 * Write a loop that pushes every even number between 0 and 100 into an array,
 * then print the array.
 */
function prompt10() {
  const myArray = [];
  // YOUR CODE HERE
  // let i = 1;
  // while (i <= 99) {
  //   if (!(i % 2)) {
  //     myArray.push(i);
  //     i++;
  //   } else {
  //     i++;
  //   }
  // }
  // don't forget to return the array after pushing the numbers into it so you can see it in the browser!
  // return the array
  return myArray;
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// console.log(prompt10());

// 🌟 MAKE A COMMIT: "Complete prompt 10"

/*
 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number. The median number is the middle number in a SORTED list of numbers. Think through the steps you'll need to take to determine this number with code!
 *
 * Hint: What does Math.floor() do?
 */

let nums = [
  14,
  11,
  16,
  15,
  13,
  16,
  15,
  17,
  19,
  11,
  12,
  14,
  19,
  11,
  15,
  17,
  11,
  18,
  12,
  17,
  12,
  71,
  18,
  15,
  12,
];

function prompt11() {
  // let median;
  // // YOUR CODE HERE
  // nums.sort(function (a, b) { return a - b });
  // let i = Math.ceil(nums.length / 2);
  // median = nums[i];
  // console.log(median);
}
// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt11();

// 🌟 MAKE A COMMIT: "Complete prompt 11"
// https://www.w3schools.com/js/js_array_sort.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Jumped into instructor chat to ask about how .sort() works, got some code from Eric (copied below) to test out in the console

// let numsNext = [
//   11, 15, 3, 25, 86, 9
// ]

// let sortedNums = numsNext.sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
//   // return Math.random() - 0.5
// });

// console.log(sortedNums);



/*
 * Prompt 12:
 *
 * Did you know that you can nest loops? The catch is that you have to use
 * different incrementers (normally i) in the inner vs. outer loops. You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
 * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
 * Inside the inner loop, print `i: ${i} / j: ${j}`
 * You might need to consult Google to see examples of nested for loops!
 */

function prompt12() {
  for (let i = 1; i < 11; i++) {
    for (let j = 11; j < i + 11; j++) {
      console.log(`i: ${i} / j: ${j}`);
    }
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt12();

// 🌟 MAKE A COMMIT: "Complete prompt 12"
// Found it interesting that the code above did not output the integers for i and j with a 1:1 ratio, i.e., that I did not get 1/11, 2/12, 3/13, etc... Experimented with adjusting the terminating condition for the j loop to see if I could achieve something more 1:1. The closest I got was when I set the j loop terminating condition to (j < i + 11).

/*
 * Prompt 13:
 *
 * Using nested loops, print all the values inside the nested arrays.
 */

let nestedArrays = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

function prompt13() {
  // YOUR CODE HERE
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt13();

// 🌟 MAKE A COMMIT: "Complete prompt 13"

///////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE :)
///////////////////////////////////////////
if (!this.window) {
  module.exports = {
    prompt1,
    prompt2,
    prompt3,
    prompt4,
    prompt5,
    prompt6,
    prompt7,
    someNumber,
    prompt8,
    prompt9,
    prompt10,
    prompt11,
    prompt12,
    prompt13,
  };
}
