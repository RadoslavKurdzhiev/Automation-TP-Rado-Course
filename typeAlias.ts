// type alias declaration

type EmployeeName = string;
type EmployeeId = number;
type EmployeePosition = string;

type Result = string | number | null;

let data: Result = 'Test';

let responseData: Result = 20;

// type alias with string literals
type PaymentMethod = 'cash' | 'card' | 'crypto';

function paymentDetails(amount: number, method: PaymentMethod) {
	console.log(`Payment ${amount}$ by ${method}`);
}

paymentDetails(20, 'crypto');

// type alias in interface
type ID = string | number;
type Status = 'Open' | 'In Progress' | 'Done';

interface Ticket {
	id: ID;
	title: string;
	status: string;
}

interface Email {
	id: ID;
	message: string;
}

const email: Email = {
	id: 10,
	message: 'Helo! I am Petar',
};

const ticket = {
	id: 1,
	title: 'Send email',
	status: 'Done',
};
