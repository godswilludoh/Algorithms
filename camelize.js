/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.*/

function camelize(str) {
	return (
		str
			.split('-')
			//transforming everyfirst letter after the dash to uppercase
			.map((word, index) =>
				index == 0 ? word : word[0].toUpperCase() + word.slice(1)
			)
			.join('')
	);
}
console.log(camelize('my-short-string'));
