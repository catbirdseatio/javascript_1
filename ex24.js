const readline = require("readline-sync");

class Game {
  constructor() {
    this.hp = Math.floor(Math.random() * 10) + 1;
  }

  say(prompt) {
    console.log(prompt);
  }

  die(message) {
    this.say(message);
    process.exit(1);
  }

  ask(prompt) {
    if (this.hp < 0) this.hp = 0;

    console.log(`[[You have ${this.hp} hit points.]]`);
    if (this.hp <= 0) {
      this.die("You spin around and fall flat!");
    } else {
      return readline.question(prompt + "");
    }
  }

  addRoom(room) {
    this[room.name] = room;
    room.game = this;
  }

  play(name) {
    this[name].enter();
  }

  hit(amount) {
    this.hp -= amount;
  }
}

class Room {
  constructor(name) {
    this.name = name;
  }

  enter() {
    console.log("Implement me!");
  }
}

class Door extends Room {
  enter() {
    // they have to open the door to get the gold
    this.game.say("There is a great big metal door in front of you.");
    this.game.say("There is a big fountain pen at your right foot.");

    let next = this.game.ask("What do you do?");

    if (next == "take pen") {
      // You must say the magic incantation to get the gold
      this.game.say("You insert pen's point into the keyhole.");
      this.game.say("An inscription emerges on the panel.");

      //what kind of puzzle will they solve?
      this.game.say("It says 'say the magic incantation'");
      
      while (true) {
        next = this.game.ask("What do you say?");

        if (next === "open sesame") {
            this.game.say("That was too easy. Try again!");
            this.game.hp -= 5;
          } else if (next === "gunter glieben glauten globen") {
            this.game.gold.enter()
            break;
          } else {
            this.game.say("The answer is incorrect. The answer is case sensitive btw.");
            this.game.hp -= 2;
        }
      }
      
      
    } else {
      this.game.say("You can't do that. You go back to the start.");
      this.game.well.enter();
    }
  }
}

class Spider extends Room {
  enter() {
    // they enter here, and the spider takes 10 hit points
    //if they live then they can run away
    this.game.hp -= 10;

    this.game.say(
      "You enter the cave. A ginormous spider emerges from a dark corner."
    );
    this.game.say("You get bit by the poisonous arachnid.");
    
    let next = this.game.ask("What do you do?");

    if (next === "go back") {
      this.game.well.enter();
    } else {
      this.game.say("That is not an option.");
    }
  }
}

class Gold extends Room {
  enter() {
    // end of the game they win if they get the gold
    this.game.say("A giant iron tray of gold bullion comes into view!");
    this.game.say("YOU HAVE WON THE JACKPOT!!!!!!!")
    process.exit(0);
  }
}

class Rope extends Room {
  enter() {
    if (this.game.hp < 0) this.game.die("You spin around and fall flat.");
    // they are at the bottom of the well
    this.game.say("You are at the bottom of the well.");
    this.game.say("You see a cave to the left door to the right of you.");

    let next = game.ask("What do you do?");
    // they can go through the door to the gold
    // or go take a wrong turn to the spider room
    if (next === "cave") {
      this.game.spider.enter();
    } else if (next === "door") {
      this.game.door.enter();
    } else {
      this.game.say("That is not an option");
      this.game.rope.enter();
    }
  }
}

class Well extends Room {
  enter() {
    this.game.say("You are walking through the woods and see a well.");
    this.game.say(
      "Walking up to it and looking down you see a shiny thing at the bottom."
    );
    let next = this.game.ask("What do you do?");

    if (next === "climb") {
      this.game.say("You climb down the rope.");
      this.game.rope.enter();
    } else if (next === "jump") {
      this.game.say("Yikes! Let's see if you survive!");
      this.game.hit(5);
      this.game.rope.enter();
    } else {
      this.game.say("You can't do that here.");
      this.game.well.enter();
    }
  }
}

let game = new Game();
game.addRoom(new Well("well"));
game.addRoom(new Rope("rope"));
game.addRoom(new Gold("gold"));
game.addRoom(new Spider("spider"));
game.addRoom(new Door("door"));
console.log(Object.entries(game));
game.play("well");
