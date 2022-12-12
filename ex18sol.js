let ex18 = require('./ex18');
let cars = ex18.cars;
let fruit = ex18.fruit;
let languages = ex18.languages;

let message = [cars[1][1][1],
    cars[1][1][0],
    cars[1][0],
    cars[3][1][1],
    fruit[3][2],
    languages[0][1][1][1],
    fruit[2][1],
    languages[3][1][0]
]

const message_string = message.join(' ');

console.log(`The message: ${message_string}.`);