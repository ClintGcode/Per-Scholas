// Week 2 Homework 2 - Functions //

// Challenge 1 //
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work. //

const maxOfTwoNumber = (num1, num2) => {
    let greater = 0;
    if (num1 > num2) {
      greater = num1;
    } else if (num2 > num1) {
      greater = num2
    } else {
      console.log('choose two different numbers')
    }
    return `${greater} is the larger number`;
  }
  
  console.log(maxOfTwoNumber(10, 11));

// Challenge 2 //
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. //

const maxOfThree = (num1, num2, num3) => {
    let numbers = [num1, num2, num3];
    for (let i = 0; i < numbers.length; i++) {
      return Math.max.apply(null, numbers);
    }
  }
  
  console.log(`${maxOfThree(100, 10, 12)} is the larger number`);

// Challenge 3//
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. //

isCharacterAVowel = (char) => {
    char = char.charAt(0);
    
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u') {
      return true;
    } else {
      return false;
    }
 }
    
console.log( isCharacterAVowel('i'));

// Challenge 4 //
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. //

let testArr = [1,2,3,4];

const sumArray = (array) => {
    let sumArr = array.reduce((a,b) => a + b);
    return sumArr;
}

const multiplyArray = (array) => {
    let multArr = array.reduce((a,b) => a * b);
    return multArr;
}

console.log(sumArray(testArr));
console.log(multiplyArray(testArr));

// Challenge 5 //
// Write a function that returns the number of arguments passed to the function when called. //

function argCount() {
  for ( i = 0; i <= arguments.length; i++) { // this loop is created to count the variables
    counter = i; // i will stop once there are no more arguments so for every iteration we add one to the counter
  }
  return counter;
}

console.log(`${argCount(1 , 2 , 3,'great')} argument(s) have been passed to this function`);

// Challenge 6 //
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj". //

let stringTest = '1 RACECAR 2';
const reverseString = (string) => {
    return string.split('').reverse().join('');
}

console.log(reverseString(stringTest));

// Challenge 7 //
// Write a function findLongestWord that takes an array of words and returns the length of the longest one. //

let testWords = ['juxtaposition', 'concise', 'small', 'Supercalifragilisticexpialidocious'];
    const findLongestWord = (wordArray) => {
    longestWord = wordArray[0];
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] < longestWord) {
            longestWord = wordArray[i];
        }
    }
    return `The longest word in this array is ${longestWord}.`;
}

console.log(findLongestWord(testWords));

// Challenge 8 //
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long. //

let testWords2 = ['juxtaposition', 'concise', 'small', 'Supercalifragilisticexpialidocious'];
let num = 22;
const filterLongWords = (arrayWords, i) => {
  let newArray = [];

  for (let counter = 0; counter < arrayWords.length ; counter++) {
    arrayWords[counter].length > i ? newArray.push(arrayWords[counter]) : false;
  }

  return newArray;
};

console.log(filterLongWords(testWords2, num));

// -------------------------------------------------------------------------------------------//

// Bonus Challenge 1 //
// Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().


const String = {
  // this method reverses strings
  reverseString(string) { 
      return string.toLowerCase().split('').reverse().join('');
  }
};
const perScholas = "Per Scholas";
console.log(String.reverseString(perScholas));


// Challenge 2 //
// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

// { a: 1,
// c: 1, e: 1,
// h: 1, l: 1,
// o: 1,
// p: 1, r: 1, s: 2, }

// create a function that takes in a string as an argument
const charFreq = (str) => { 
  // this converts the string to lower case characters, turns it into an array of characters, 
  // I used the reduce method: labeling the accumulator count and acknowledging each character as the current value
  
  return str.toLowerCase().split('').reduce((count,letter) => { 
    // within the reduce method there is a ternary operator checking for characters and their frequency.   
    count[letter] ? count[letter]++ : count[letter] = 1;
    return count;
    // We set empty curly braces as the initial value, creating an empty object to be filled once the method executes.
  }, {});
}; 

let charTest = 'Per Scholas';

console.log(charFreq(charTest));
