let name = "Zed A. Shaw";
let age = 43;
let height = 74;

// PUZZLE: What happens if you use Math.round?
let feet = Math.floor(height / 12);
let inches = height - feet * 12;

// you can use a variable as a parameter
console.log("Name:", name);
console.log("Age:", age);

// you can also embed variables in strings with ``
console.log(`Height ${feet} feet ${inches} inches.`);

console.log("Age * Height:", age * height);
// you can also put math in the ${} boundaries
console.log(`Age * Feet: ${age * feet}`);
