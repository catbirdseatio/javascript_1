// Exercise 12: Functions, Files, Variables

const fs = require('fs');

const print_lines = (err, data) => {
    console.log(data.toString());
}

const yell_at_me = (err, data) => {
    let text = data.toString();
    console.log("THIS IS YELLING...", text.toUpperCase());
}

const pad_yell = (what) => {
    let text = what.padStart(1250, '-');
    return text.toUpperCase()
}

const cb_pad_yell = (err, data) => {
    let text = data.toString();
    console.log("ThIs is PaD YeLl");
    print_lines(err, pad_yell(text));
}

fs.readFile("poem.txt", print_lines);

// let's do that again but with an anonymous function
// you've actually seen this before

fs.readFile("poem.txt", yell_at_me)
fs.readFile("poem.txt", cb_pad_yell);