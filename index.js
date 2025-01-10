function main() {
	var input1 = document.getElementById('input1');
	var input2 = document.getElementById('input2');
	var operation = document.getElementById('operation');
	
}

function handleOperationChange() {
	var calculate = document.getElementById('calculate');
	var result = document.getElementById('result');

	calculate.onclick= () => {
		var a = input1.value;
		var b = input2.value;
		var op = operation.value;
		var sum = 0;
		
		if (op === '+') {
			sum = addNumbers(a, b);
		} else if (op === '-') {
			sum = subtractNumbers(a, b);
		} else if (op === 'division') {
			sum = divideNumbers(a, b);
		} else if (op === '*') {
			sum = multiplyNumbers(a, b);
		}
		
		result.innerHTML = sum;
	}
}

function addNumbers(a, b) {
	const sum = a + b;
	return sum;
}

function subtractNumbers(a, b) {
	const sum = a - b;
	return sum;
}

function divideNumbers(a, b) {
	const sum = a / b;
	return sum;
}

function multiplyNumbers(a, b) {
	const sum = a * b;
	return sum;
}
