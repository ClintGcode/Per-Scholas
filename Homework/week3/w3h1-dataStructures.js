// Week 3 Homework 1 - Data Structures //

// Challenge 1 - Arrays - Examining Elements //

// Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). Then console.log fourthItem to see the output.

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
const fourthItem = horror[3];
console.log('Challenge 1');
console.log(fourthItem);

// Challenge 2 - Arrays - Adding Elements //
// Use a built-in JavaScript method to add another show to the netflixShows array. Then log your updated array to the console.

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];
netflixShows.push('Undoing');
console.log('Challenge 2');
console.log(netflixShows);

// Challenge 3 - For Loops and Arrays //
// 1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.
// 2. Use a second for loop to iterate through the greetings and console.log() each greetings.

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];


for (let i = 0; i < synonyms.length; i++) {
  greetings.push(`Have a ${synonyms[i]} day!`);
}; 
console.log('Challenge 3');
console.log(greetings)

for (let i = greetings.lenght-1; i > greetings.length; i--) {
  console.log(greetings[i]);
}

// Challenge 4 - For loops - Calculating Array Elements //
// You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.

const increaseByTwo = [1, 2, 3, 4, 5];

for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] += 2; 
}

console.log('Challenge 4');
console.log(increaseByTwo); 

// Challenge 5 - For Loops and Array Indices //
// For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

for (let i = 0; i < places.length; i++) {
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
}

console.log('Challenge 5');
console.log(bios);

// Challenge 6 - Objects - Adding Properties //
// You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is an element of possibleIterable that is divisible by three. The value of each key should be the array index at which that key can be found in possibleIterable.

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i = 0; i < possibleIterable.length; i++) { //Loops through the divByThree Object
  if (possibleIterable[i] % 3 === 0){ // if the current number is divisible by three the block will execute
    divByThree[possibleIterable[i]] = i; // Adds value of possibleIterable[i] to divByThree Key
  }
}

 console.log('Challenge 6');
console.log(divByThree);

// Challenge 7 - Objects - Evaluating Keys //
// You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total

const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
for (const element in sumMe) {
  typeof sumMe[element] === 'number' ? total += sumMe[element] : null; 
}

console.log('Challenge 7')
console.log(total);