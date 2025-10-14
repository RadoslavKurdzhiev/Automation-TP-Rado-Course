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
