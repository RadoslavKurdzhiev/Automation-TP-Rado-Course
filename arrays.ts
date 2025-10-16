//arrays declaration
let numsArray: number[] = [1, 2, 3, 4];
let stringArray: string[] = ['Pesho', 'Gosho', 'Tosho', 'Ivan'];
let combinedArray: (string | number)[] = [1, 'Pesho', 'Ivan', 2];

// access element by index
stringArray[0];
stringArray[1];
combinedArray[2];

// access array length
numsArray.length;

// method map
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringArray.map((curName: string) => `Hello ${curName}`);
console.log(multiplyNums);
console.log(mapNames);

let checkTypeOf = combinedArray.map((element: number | string) => {
	if (typeof element === 'number') {
		return element + 5;
	} else {
		return `Welcome ${element}`;
	}
});
console.log(checkTypeOf);
//-----------------------------
//Method filter
let positiveNumbers: number[] = [2, 3, 4, 5, 6];

let filteredArray: number[] = positiveNumbers.filter((num: number) => num > 3);
console.log(filteredArray);

//method sort
let sortNumbers: number[] = [100, 2, 30, 5, 40, 6];
let sortedNumbers: number[] = sortNumbers.sort(
	(a: number, b: number) => a - b
);
console.log(sortedNumbers);

//method push
sortedNumbers.push(200);
console.log(sortedNumbers);

//method pop
sortedNumbers.pop();
console.log(sortedNumbers);

//method shift
sortedNumbers.shift();
console.log(sortedNumbers);

//method unshift
sortedNumbers.unshift(1);
console.log(sortedNumbers);
