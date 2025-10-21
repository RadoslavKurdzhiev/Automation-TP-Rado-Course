//let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = 'Welcome';
//Cannot assign to 'welcomeMssg' because it is a constant.ts(2588)
//welcomeMssg = '';

//return string length
let message: string = 'Hello, Someone!';
let messageLength: number = message.length;

console.log(messageLength);

//string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
console.log(welcomeMessageDetails);

// number and number operations 

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numTwo - numTwo;
let multiply: number = numOne*numTwo;
let divide: number = numOne/numTwo;

//boolean (true/false)
// === -> проверява дали са равни стойността и типа на променливите

let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 5;

// Conditions

// ternary operator
//let test = 5 === 5 ? 'true' : 'false';
let positiveNumComparison: string = numOne > 0 ? `The number ${numOne} is positive` : `The number ${numOne} is negative`;
console.log(positiveNumComparison);


// if/else statement

const numThree: number = 100;

if (numThree <= 10) {
    console.log("The number is less or equal to 10");
} else if (numThree > 50) {
    console.log("The number is greater than 50");
} else {
    console.log("numOne is not greater than 3");
}