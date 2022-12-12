let data = require("./ex19");

let phrase = [];

phrase.push(data.cars[1].size);
phrase.push(data.cars[1].color);
phrase.push(data.cars[1].type);
phrase.push(data.cars[3].size);
phrase.push(data.fruit[3].rating);
phrase.push(data.languages[0].opinion[1]);
phrase.push(data.fruit[2].count);
phrase.push(data.languages[3].speed);

let phrase_string = phrase.join(" ");
console.log(`The phrase is: '${phrase_string}'`);
