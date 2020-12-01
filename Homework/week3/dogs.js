// create a dog class
class Dog {
    constructor(name, age = .5, color, breed) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.breed = breed;
    }
    // eat, running, barking, zooming
    eat() {
      console.log("I eat the food. It is great")  ;
    }
    running() {
      console.log("I don't want to stop running");
    }
    barking() {
      console.log("The dog says woof");
    }
    zooming() {
      console.log("I am faster than The Flash");
    }
  }
  const corgi = new Dog("Mr.Waddles", undefined, "brown", "corgista");
  // console.log(`${corgi.name} is ${corgi.age} years old`);
  corgi.zooming();
  const husky = new Dog("Jack", 2, "white", "husky");
  const theBoss = new Dog("theBoss", 13, "tri-color", "yorkie");