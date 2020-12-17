// Week 3 Day 2 Afternoon Lab //

// Challenge 1 -  Mr. Bonner //
const hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
const notHof = hof.pop();
console.log(hof);
console.log(notHof);

// Challenge 2 - New Menus //

const testMenu = [
    "McPizza Burger",
    "McFly Burger",
    "McLinguine",
    "McChar-Siu Bau",
    "McChop-Chae",
    "McPancit"
    ];

testMenu.splice(2, 3);
console.log(testMenu);

// Challenge 3 - One Love //
const westSide = ["Dre", "2Pac", "Snoop"];
const eastSide = ["Biggie", "Diddy", "Craig Mack"];
const oneLove = westSide.concat(eastSide);
console.log(oneLove);

// Challenge 4 - Kardashian Beef //
const fbFriends = [
    "Khalid",
    "Yeezy",
    "Kimmy K",
    "Lamar Odom",
    "Lebron",
    "Warren Buffet"
    ];
const unFriend = fbFriends.splice(1,3);
console.log(unFriend);

// Challenge 5 - User Profile //
const user1 = {

    first_name: "Clinton",
    
    last_name: "Garwood",
    
    company: "Google",
    
    department: "Software Development",
    
    greeting() {
        return `hello ${this.first_name} ${this.last_name} of ${this.company}'s ${this.department} department. Welcome!`
    }
    };

console.log(user1.greeting());

// Challenge 7 - Codesmith Objects - Iterating with For in //
    // You are provided with an empty array called objToArray. Using a  for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};
      
const objToArray = [];

for (const property in checkObj) {
  checkObj[property] >= 2 ? objToArray.push(checkObj[property]) : null; 
}

console.log(objToArray);

// Challenge 8 - Codesmith Objects - Iterating with a for loop //
    // This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.

const _checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};
    
let divBy6 = false;
const _objToArray = Object.values(_checkObj);

for (const keys of _objToArray) {
     keys%6 === 0 ? divBy6 = true : divBy6 = false;
     divBy6 === true ? console.log(`${keys} is divisible by 6`) : console.log(`${keys} is not divisible by 6`);
}
      