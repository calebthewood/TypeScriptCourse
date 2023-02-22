console.log("It's Working!");


class Player {
  #score = 0;
  numLives = 0;
  constructor(first, last) {
    console.log("Constructing Player");
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`
  }

  get score() {
    return this.#score
  }

  set score(val) {
    if (val > 0) {
      this.#score = val
    } else {
      throw new Error("Score must be positive")
    }
  }

  taunt() {
    console.log("Wololo!");
  }
}

const player1 = new Player("Brian", "Boru");

console.table(player1);