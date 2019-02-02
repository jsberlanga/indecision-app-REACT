class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age
  }
  getGreeting() {
    return `${this.name} says hello.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }
    return description
  } 
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    // return !this.homeLocation // false
    return !!this.homeLocation // true
  }

  getGreeting() {
    
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}`;
    }

    return greeting;

  }
}

const me = new Traveller('Julio Soto', 31, 'Philadelphia');
console.log(me);
console.log(me.getGreeting());

const other = new Traveller();
console.log(other);
console.log(other.getGreeting());