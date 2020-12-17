// Week 3 Day 2 Morning Lab //

// Challenge 1 - Create an array with 50 integers //
const arr = [];
for (let i = 1; arr.length < 50; i++) {
    arr.push(i);
};
console.log(arr);

// Challenge 2 - Shopping List //
const shoppingList = []; 

shoppingList.push('cool ranch doritos', 'kings hawaiian sweet bread', 'peanut butter oreos','fruit loops cereal');

console.log(shoppingList);

// Challenge 3 - reverse method //
let yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
console.log(yoda.reverse().join(' '));

// Challenge 4 = now serving //
const nowServing = [];

const waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];

waitList.forEach(customer => nowServing.push(`now serving ${customer}`));

console.log(waitList, nowServing);

// Challenge 5 - Help Nike // 
const shoe = ["just", "do", "it"];
const shoeString = shoe.join(' ');
console.log(shoeString);