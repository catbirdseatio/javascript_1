const fs = require('fs');

let file_name = process.argv[2];

// Split string by newline.
let splits_by_line = (text) => text.split('\n');

// Display line numbers and line.
// Line numbers are padded for 3 digits.
let display = lines => {
    for (let i = 0; i < lines.length; i++) {
        let line_number = String(i).padStart(3, '0')
        console.log(`${line_number} | ${lines[i]}`);
    }
}

/**
 * Callback function to display text and line numbers of a file if it exists.
 */
let display_lines = (err) => {
    if (err) {
        console.log("File does not exist.");
    } else {
        let contents = fs.readFileSync(file_name);
        let text = contents.toString();
        let lines = splits_by_line(text);
        display(lines);
    }
}

// Program runs here
fs.access(file_name, fs.constants.F_OK, display_lines);