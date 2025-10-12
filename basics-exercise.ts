console.log('1. Declare name and age, then print a message using string interpolation')
const fullName: string = "Radko Piratko";
const age: number = 33;

console.log(`Hello! I am ${fullName}, ${age} years old`);

console.log('2. Declare two numbers, calculate addition and subtraction, and print them')

const number1: number = 10;
const number2: number = 20;

const addition:number = number1 + number2;
const subtraction:number = number1 - number2;

console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);

console.log('3. Check if a number is within a range');

const someNumber: number = 41;
const isWithinRange: boolean = someNumber >= 10 && someNumber <= 50;

console.log(`Is the number ${someNumber} within range (10 to 50)? ${isWithinRange}`);