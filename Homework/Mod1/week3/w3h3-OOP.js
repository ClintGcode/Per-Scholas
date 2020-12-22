// Week 3 Homework 3 - Object Oriented Programming (OOP) //

// Challenge 1 //
// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
    // Create an empty object
    // Add a name property to the newly created object with its value being the name argument passed into the function
    // Add an age property to the newly created object with its value being the "age" argument passed into the function
    // Return the object

function makePerson(name, age) {
    // add code here
    return {
    name: name,
    age: age,
    }
}
    
const vicky = makePerson('Vicky', 24);
    
    
// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

// Challenge 2 //
// Inside personStore object, create a property greet where the value is a function that logs "hello".

const personStore = {
	// add code here
	greet: function() {
  console.log("hello")
}

};

// Uncomment this line to check your work!
personStore.greet(); // -> Logs 'hello'

// Challenge 3 //
// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.


const personStore2 = {
    greet: function() {
      console.log('hello');
    }
  }
  
function personFromPersonStore(name, age) {
    // Declare a person object variable and assign it to the output of
    // Object.create, passing in personStore as the proto
    const person = Object.create(personStore2);
    // add name property to person
    person.name = name;
    // add age property to person
    person.age = age;
    // return person object
    return person;
}
  
  
const sandra = personFromPersonStore('Sandra', 26);

personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`)
}
  
// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
// sandra.introduce();

// Challenge 5 - PersonConstructor //

function PersonConstructor() {
	// add code here
	// assign a property called greet to this
  this.greet = () => {
    console.log('hello')
  }

}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'


// Challenge 6 - personFromConstructor //
// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor(name, age) {
      // add code here
    // Declare a new person variable and assigning
    // it to the personConstructor function
      const person = new PersonConstructor();
    person.name = name;
    person.age = age;
      
    
    return person;
  }
  
  const mike = personFromConstructor('Mike', 30);

  PersonConstructor.prototype.introduce = function(){
    console.log(`Hi, my name is ${this.name}`);
  }
  
  // Uncomment this line to check your work!
  
  
  // Uncomment these lines to check your work!

  class PersonClass {
	constructor(name) {
    // add code here
		this.name = name;
		
	}

	// add code here
	greet(){
    console.log('hello');
  }
}

const george = new PersonClass('George');

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'
mike.introduce(); // -> Logs 'Hi, my name is Mike'
george.greet(); // -> Logs 'hello'

class PersonClass2 {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass2 {
  constructor(name,age){
    super(name, age);
  }
  
  introduce(){
    console.log(`Hello World, my name is ${this.name}`)
  }
}
const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'