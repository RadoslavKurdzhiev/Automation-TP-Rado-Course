//interface declaration
interface Car {
	type: string;
	model: string;
	color: string;
	horsePower: number;
}
//interface person declaration
interface Person {
	name: string;
	lastName: string;
	age: number;
	address: string;
	hobbies: string[];
	favoriteNums: number[];
	greeting: () => string;
}

//object declaration

const car: Car = {
	type: 'Toyota',
	model: 'Corolla',
	color: 'red',
	horsePower: 200,
};

//object with method and array values

const person: Person = {
	name: 'Ivan',
	lastName: 'Ivanov',
	age: 30,
	address: 'bul. Bulgaria 30A',
	hobbies: ['football', 'basketball', 'hiking'],
	favoriteNums: [1, 2, 3, 4],
	greeting: function () {
		return "Hello, I'm Ivan!";
	},
};

console.log(person);
console.log(person.greeting());

// properties access
person.name;
person.age;
person['address'];

person.greeting();
person['greeting']();

// properties redeclaration
person.age = 35;
console.log(person);

// let vs const redeclaration
let dog = { name: 'Spark' };
dog.name = 'Bobb';
dog = { name: 'Nik' };

const cat = { name: 'Lusi', age: 10 };
cat.name = 'Kitty';
//cat = { name: "Tom" };

const cars: { type: string; model: string; horsePower: number } = {
	type: 'Fiat',
	model: '500',
	horsePower: 100,
};

//interfaces - optional parameters, read only, string literal
interface User {
	name: string;
	readonly email: string;
	//string literals
	role: 'QA' | 'admin' | 'dev';
	age: number;
	job?: string;
	password?: string | number;
}

const user: User = {
	name: 'Tom',
	email: 'test',
	role: 'admin',
	age: 24,
};

//Combining Interfaces using extends keyword
interface Transmission {
	type: string;
}

interface CarTest extends Transmission {
	horsepower: number;
}

const carTransmission: CarTest = {
	horsepower: 300,
	type: 'Automatic',
};
