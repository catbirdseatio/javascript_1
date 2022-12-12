// we need a way to build these automatically
const Person = (name, age, eyes) => {
    let obj = {
        name: name,
        age: age,
        eyes: eyes
    }

    // the attach our function to it
    obj.talk = (words) => {
        // coolest part is obj here will keep a reference
        console.log(`I am ${obj.name} and ${words}.`)
    }

    // and return our new person
    return obj;
}

// let's use that to make some people
let people = [
    Person("Alex", 16, "green"),
    Person("Mary", 100, "blue"),
    Person("Jon", 35, "brown"),
    Person("Joseph", 19, "blue"),
    Person("Anne", 56, "brown"),
    Person("Zed", 47, "blue")
]

for (let human of people) {
    let name = human.name.padEnd(10, ' ');
    let age = String(human.age).padEnd(3, ' ');
    let eyes = human.eyes.padEnd(6, ' ');

    console.log(`${name} is ${age} years old and has ${eyes} eyes.`);
}

for (let human of people) {
    human.talk("I can talk!")
}

