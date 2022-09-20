let numbers = [1, 2, 3, 4, 5];

//using a for loop
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
console.log(sum);

//putting for loop inside a function
function addNumber(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
console.log(addNumber([1, 2, 3, 4, 5]));

//using the reduce array method
let sumNumbers = numbers.reduce((currentTotal, item) => {
	return item + currentTotal;
}, 0);
console.log(sumNumbers);
