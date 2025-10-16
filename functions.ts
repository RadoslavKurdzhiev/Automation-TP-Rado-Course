//Function

function displayPersonalData(name: string, age: number) {
	return `Hello ${name}, age ${age}`;
}

console.log(displayPersonalData('Stavri', 25));

const personalData: string = displayPersonalData('Pesho', 35);
console.log(personalData);

function greetingVoid(): void {
	console.log('This function is type void');
}

function devideNumbers(numOne: number, numTwo: number): number {
	return numOne / numTwo;
}

console.log(devideNumbers(2, 6));

//arrow functions

const sumNumbers = (a: number, b: number) => a + b;

sumNumbers(3, 3);
console.log(sumNumbers(3, 3));

// optional parameters
function greeting(name: string, age?: number) {
	if (age) {
		console.log(`${name} is ${age} years old`);
	}
	console.log(`Hi I'm ${name}`);
}

greeting('Todor');
greeting('Tihomir', 55);

//default parameters
function substractNums(numOne: number = 10, numTwo: number = 5) {
	console.log(numOne - numTwo);
}
substractNums(50);
substractNums(50, 30);
