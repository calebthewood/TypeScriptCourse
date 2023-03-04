class Player {
    constructor(first, last) {
        this._score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret Tunnel");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set score(newScore) {
        if (newScore > 0) {
            this._score = newScore;
        }
        else {
            throw new Error("Score must be postive");
        }
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 19;
    }
}
class ParameterProperties {
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
    secretMethod() {
        console.log("Secret Tunnel");
    }
}
class Spaceship {
    constructor(color, fuel) {
        this.color = color;
        this.fuel = fuel;
    }
    print() {
        console.log(`The ${this.color} rocket ignited the ${this.fuel}, and blasted off to the stars!`);
    }
}
const p1 = new Player("Colo", "See'Um");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hoursWorked * this.hourlyRate;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
