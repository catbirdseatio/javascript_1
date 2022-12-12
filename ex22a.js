class Person {
  constructor(name, age, eyes, dog_owner) {
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.dog_owner = dog_owner
  }

  talk(words) {
    console.log(`I am ${this.name} and ${words}`);
  }

  is_dog_owner() {
    if (this.dog_owner) {
      console.log(`${this.name} is a dog owner!`);
    } else {
      console.log(`${this.name} does not own a dog.`);
    }
  }
}

const people = [
  new Person("Alex", 16, "green", true),
  new Person("Mary", 44, "brown", false),
  new Person("Frank", 34, "blue", true),
];

const phrases = [
    "I am talking here!",
    "these are some words",
    "Hi there!"
];

// Say the phrases matched by phrase's index
for (let [index, value] of people.entries()) {
  value.talk(phrases[index]);
}

for(let person of people) {
    console.log(`${person.name} is ${person.age}`)
}

for(let person of people) {
 person.is_dog_owner();
}