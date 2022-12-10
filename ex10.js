// Exercise 10: Files, Args, Variables, Oh My

const fs = require('fs');

let file_to_open = process.argv[2];
let file_contents = fs.readFileSync(file_to_open);
let file_callback = (err, data) => {
    console.log(data.toString());
};
let unlink_callback = (err) => {
    console.log("Unlinked file. Unlinking means 'delete'.")
}
let stats_callback = (err, stats) => {
    console.log('STATS:', stats);
}

console.log(`The file named ${file_to_open} contains:`);
console.log("This one is sync...");
console.log(file_contents.toString());

// Use a callback
console.log("---------------");
console.log("Using a callback...");
fs.readFile(file_to_open, file_callback);

// file stats
console.log("---------------");
fs.stat(file_to_open, stats_callback);

// unlink file
console.log("---------------");
fs.unlink(file_to_open, unlink_callback);