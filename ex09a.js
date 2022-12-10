// https://nodejs.org/api/fs.html
const fs = require("fs");

const my_callback = (err, data) => {
    console.log(data.toString());
}

const the_file = process.argv[2];

let contents = fs.readFileSync(the_file);

console.log("Contents:");
console.log(contents.toString());

// using a callback

console.log("---------------");
fs.readFile(the_file, my_callback);