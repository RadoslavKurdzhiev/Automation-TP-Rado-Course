//forEach method

const nums: number[] = [10, 20, 30, 40];

nums.forEach((n: number, index: number) => {
	console.log(`Index ${index} value ${n}`);
});

//Sum nums
let sum: number = 0;

nums.forEach((num: number) => {
	sum = sum + num;
    //sum +=n
});

console.log(sum);

// active users

interface User {
	id: number;
	name: string;
	isActive: boolean;
}

const users: User[] = [
	{ id: 1, name: 'Dido', isActive: true },
	{ id: 2, name: 'Niki', isActive: false },
	{ id: 3, name: 'Pesho', isActive: false },
	{ id: 4, name: 'Zoro', isActive: true },
];

export {};

let activeIds: number[] = [];

users.forEach((user: User) => {
	if (user.isActive) {
		activeIds.push(user.id);
	}
});
console.log(activeIds);
