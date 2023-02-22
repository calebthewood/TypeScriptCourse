// Section 2
console.log("Hello");
console.log("World!");
console.log(Math.round(4.5678));
// Section 3
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;

let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "0";

let gameOver: boolean = false;
gameOver = true;

// Type Inference
let tvShow = "Last of Us";
tvShow = true;

let isBleak = true;
isBleak = "abc";

// Any
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// Delayed Initializing and Implicit Any
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie; // TS infers this var has an any type

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus"; // foundMovie has any type here, but we would want 'string'
  }
}
// bad idea to infer type when initializing variable with no value

// Section 4

// Always type parameters, implied return type: number
function square(num: number) {
  return num * num;
}

// defult parameters go after annotation, implied return type: number
function greet(name: string = "stranger") {
  return `Hello ${name}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => { };

greet(2); // err
square(2);
doSomething("Bob", 2, 4); // err for 3rd param
doSomething("Bob", 2, true, 5); // err for extra param

// Return Types
function cube(num: number): number {
  return num * num * num;
}

// union type
function random(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

// Anonymous fns. TS can use context to infer types in situations like the below.
const colors = ["red", "blue", "green"]; // infers array of strings
colors.map(color => {
  return color.toUpperCase(); // infers returning array of strings
});

// Void: explicitly type void when fn will not return
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  return ""
};

// Never: a function that will never return, ex: game loop, errors, etc
const neverStop = (): never => {
  while(true) {
    console.log("I'm Still Going")
  }
  return true
}

function makeError(msg: string): never {
  throw new Error(msg)
}