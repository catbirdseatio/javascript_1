const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
}

const die = (message) => {
    say(message);
    process.exit(1);
}

const ask = (hp, prompt) => {
    // If hp is negative, set it to 0
    if (hp < 0) {
        hp = 0;
    }
    console.log(`[[You have ${hp} hit points.]]`);
    if (hp <= 0) {
        die("You died!");
    } else {
        return readline.question(prompt + ' ');
    }
}

const door = (hp) => {
    say("There is a great big metal door in front of you.");
    say("There is a big fountain pen at your right foot.");

    let next = ask(hp, "What do you do?");

    if (next == "take pen") {
        // You must say the magic incantation to get the gold
        say("You insert pen's point into the keyhole.");
        say("An inscription emerges on the panel.");
        say("It says 'say the magic incantation'");
        next = ask(hp, "What do you say?");

        if (next == 'open sesame') {
            say("That was too easy! Try again!");
            hp -= 5;
            if (hp < 0) die("You spin around and fall flat!");
            door(hp);
        } else if (next == "gunter glieben glauten globen") {
            gold(hp);
        } else {
            say("The answer is incorrect. The answer is case sensitive btw.");
            hp -= 2;
            if (hp < 0) die("You spin around and fall flat!");
            door(hp);
        }
        
    } else {
        say("You can't do that here. You go back.");
        rope(hp);
    }
}

const spider = (hp) => {
    hp -= 10;
    say("You enter a a cave. A ginormous spider emerges from a dark corner.");
    say("You get bit by the poisonous arachnid.");
    // they enter here, and the spider takes 10 hit points
    let next = ask(hp, "What do you do");
    
    if (next == 'go back') {
        well(hp);
    } else {
        say("You can't do that here. You go back to the well.");
        well(hp);
    }
}

const gold = (hp) => {
    // end of the game they win if they get the gold
    say("A giant iron tray of gold bullion comes into view!");
    say("YOU HAVE WON THE JACKPOT!!!!!!!")
    process.exit(0);
}

const rope = (hp) => {
    if (hp < 0) die("You spin around and fall flat!");
    // they are at the bottom of the well
    say("You are at the bottom of the well.");
    say("You see a door to the left and a cave to the right of you.");
    let next = ask(hp, "What do you do?");
    
    // the can go through the door to the gold
    // or go take a wrong turn to the spider
    if (next === 'cave') {
        spider(hp);
    } else {
        door(hp);
    }
}

const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it and looking down and see a shiny thing at the bottom.");
    let next = ask(hp, "What do you do?");

    if (next === "climb") {
        say("You climb down the rope");
        rope(hp);
    } else if (next === "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp / 2);
        rope(hp);
    } else {
        say("You can't do that here.");
        well(hp);
    }
}

// set up hit points
let hp = Math.floor(Math.random() * 10) + 1;

// this starts the game
well(hp);