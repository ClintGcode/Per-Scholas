class Person {
    constructor(nameParam, ageParam){
        this.name = nameParam;
        this.age = ageParam;
    }

    getName(){
        return this.name;
    }

    greetPeople() {
        console.log(`Hello I am ${this.name}`);
    }

}

class Superhero extends Person {
    constructor(name, age, superPowerParam) {
        super(name, age);
        this.superpower = superPowerParam;
    }

    describePower() {
        console.log(`I am able to ${this.superpower}`);
    }
}

const spidey = new Superhero('Miles Morales', 16, 'Shoot Webs');

const firstPerson = new Person('Clinton', 27);
const lisaPerson = new Person('Lisa', 28) ;
console.log(firstPerson);
console.log(lisaPerson);
lisaPerson.greetPeople();
spidey.describePower();
console.log(spidey.name);