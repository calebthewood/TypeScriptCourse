class Player {
  public readonly first: string;
  public readonly last: string;
  protected _score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log("Secret Tunnel");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  set score(newScore: number) {
    if (newScore > 0) {
      this._score = newScore;
    } else {
      throw new Error("Score must be postive");
    }
  }
}

class SuperPlayer extends Player {
  isAdmin: boolean = true;
  maxScore() {
    this._score = 19;
  }
}

class ParameterProperties {
  constructor(
    public readonly first: string,
    public readonly last: string,
    private score: number
  ) { }

  private secretMethod(): void {
    console.log("Secret Tunnel");
  }
}

interface Colorful {
  color: string;
}

interface Rocket {
  fuel: string;
}
class Spaceship implements Colorful, Rocket {
  constructor(
    public color: string,
    public fuel: string
  ) { }

  print() {
    console.log(`The ${this.color} rocket ignited the ${this.fuel}, and blasted off to the stars!`);
  }
}

const p1 = new Player("Colo", "See'Um");

abstract class Employee {
  constructor(public first: string, public last: string) { }
  abstract getPay(): number; // child classes must have a getPay method
}

class FullTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private salary: number
  ) {
    super(first, last);
  }
  getPay() {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }

  getPay() {
    return this.hoursWorked * this.hourlyRate;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay())
