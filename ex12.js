// Exercise 12: Functions, Files, Variables

const fs = require('fs');

const print_lines = (err, data) => {
    console.log(data.toString());
}

const yell_at_me = (what) => {
    return what.toUpperCase();
}

const pad_yell = (what) => {
    let text = what.padStart(1250, '-');
    return text.toUpperCase()
}

const cb_pad_yell = (err, data) => {
    let text = data.toString();
    console.log("ThIs is PaD YeLl", pad_yell(text));
}

fs.readFile("poem.txt", print_lines);

// let's do that again but with an anonymous function
// you've actually seen this before

fs.readFile("poem.txt", (err, data) => {
    let text = data.toString();
    let yelling = yell_at_me(text);
    print_lines(err, yelling);
})

fs.readFile("poem.txt", cb_pad_yell);