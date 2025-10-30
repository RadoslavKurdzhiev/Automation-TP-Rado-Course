// class declaration

// class Person {
// 	name: string;
// 	age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	introduction(): void {
// 		console.log(`Hi, I am ${this.name} and I am ${this.age}`);
// 	}
// }

// const person1 = new Person('Radoslav', 20);

// person1.introduction();

class Person {
	constructor(
		public name: string,
		public age: number
	) {
		this.name = name;
		this.age = age;
	}

	introduction(): void {
		console.log(`Hi, I am ${this.name} and I am ${this.age}`);
	}
}

const person1 = new Person('Radoslav', 20);

person1.introduction();

//readonly access modifier
class ReadOnlyPersonData {
	readonly name: string;
	readonly age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	intro(): void {
		console.log(`Hi, I am ${this.name} and I am ${this.age}`);
	}
}

const readOnlyPersonData1 = new ReadOnlyPersonData('Radko', 32);

readOnlyPersonData1.intro();

//Private access modifier
class PrivatePersonData {
	private name: string;
	private age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	private displaySecretMssg(): string {
		return 'This is private';
	}

	introPrivate(): string {
		return `Hi, I am ${this.name} and I am ${this.age}`;
	}
	intro2(): void {
		console.log(`Hi, I am ${this.name} and I am ${this.age}`);
		console.log(this.displaySecretMssg);
	}
}

const privatePersonData1 = new PrivatePersonData('Selo d', 28);

//privatePersonData1.name -> Property 'name' is private and only accessible within class 'PrivatePersonData'.ts(2341)

privatePersonData1.introPrivate();

//privatePersonData1.displaySecretMssg(); -> Property 'displaySecretMssg' is private and only accessible within class 'PrivatePersonData'.ts(2341)
privatePersonData1.intro2();

//Inheritance
class UserMaster {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	intro(): void {
		console.log('Hey! Nice to meet you');
	}
}

class UserDetails extends UserMaster {
	age: number;
	constructor(name: string, age: number) {
		super(name);
		this.age = age;
	}

	showDetails(): void {
		console.log(`My name is ${this.name}`);
	}
}

const user3 = new UserDetails('Peter', 36);
user3.intro();
user3.showDetails();

// protected access modifier

class ProtectedPerson {
	// protected name: String;
	// protected age: number;

	constructor(
		protected name: String,
		protected age: number
	) {
		this.name = name;
		this.age = age;
	}

	protected getProtectedData(): string {
		return `Hi, I am ${this.name} and I am ${this.age}`;
	}
}

class Student extends ProtectedPerson {
	private grade: number;
	constructor(name: string, age: number, grade: number) {
		super(name, age);
		this.grade = grade;
	}

    studentIntro():void{
        console.log(this.getProtectedData())
    }
}
