// 1.
// Create an array of strings and add a new element at the end
// of the array. Log the result.
let fruits: string[] = ['apple', 'banana', 'cherry'];

fruits.push('orange');
console.log(fruits);

// 2. Create an array of numbers and remove the first element from
// the array. Log the result.
let numbers: number[] = [22, 33, 44, 55];

numbers.shift();
console.log(numbers);

// 3.Use the map method to create a new array and divide each
// number by 2 “num / 2” from [1, 2, 3, 4, 5]. Log the
// result.
let numbersToBeDivided: number[] = [1, 2, 3, 4, 5];

let dividedNumbers = numbersToBeDivided.map(num => num / 2);
console.log(dividedNumbers);

// 4.Use the filter method to create a new array containing only
// numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the
// result.
let numbersToBeFiltered: number[] = [3, 7, 1, 9, 12, 4];

let filteredNumbers = numbersToBeFiltered.filter(num => num > 5);
console.log(filteredNumbers);

// 5. Use the sort method to sort an array of numbers [9,
//     3, 7,
//     2, 8, 5] in ascending order. Log the result.
let numbersToBeSorted: number[] = [9, 3, 7, 2, 8, 5];

numbersToBeSorted.sort((a, b) => a - b);
console.log(numbers);

// 6. Use the slice method to extract the first three elements from
// ['apple', 'banana', 'cherry', 'date',
// 'elderberry']. Log the result.

let fruitsToBeSliced: string[] = [
	'apple',
	'banana',
	'cherry',
	'orange',
	'berry',
];

let firstThree = fruitsToBeSliced.slice(0, 3);
console.log(firstThree);
