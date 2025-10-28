//basic async operation
// console.log('Start');

// setTimeout(() => {
// 	console.log('Async operation 1 sec');
// }, 1000);

// setTimeout(() => {
// 	console.log('Async operation 3 sec');
// }, 3000);

// setTimeout(() => {
// 	console.log('Async operation 2 sec');
// }, 2000);

// console.log('End');

// multiple async operations

// function setTimeouts() {
//     setTimeout(() => {
//         console.log("3 seconds delay");
//     }, 3000);

//     setTimeout(() => {
//         console.log("1 second delay");
//     }, 1000);

//     setTimeout(() => {
//         console.log("2 seconds delay");
//     }, 2000);
// }

// setTimeouts();

// function delay(ms: number) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function demo() {
//     await delay(2000);
//     console.log("2 seconds delay");

//     await delay(3000);
//     console.log("3 seconds delay");

//     await delay(1000);
//     console.log("1 second delay");
// }

// demo();

//fetch data
interface Rating {
	rate: number;
	count: number;
}

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
}

async function getData(): Promise<void> {
	const response = await fetch('https://fakestoreapi.com/products/1');
	//console.log(response);
	const data: Product = await response.json();
	console.log('data', data);
}

getData();

//try catch finally
try {
    // parse json to js object
    const n = JSON.parse('{"valid": true}');
    console.log("OK:", n.valid);
} catch (err) {
    console.error("Invalid JSON!", err);
} finally {
    console.log("Ready");
}