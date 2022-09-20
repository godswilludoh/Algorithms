//Your task is to determine if the specified letter is in the characters array. The characterExist function should return true if
//letter is in the characters array and return false otherwise

let characters = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', ' i'],
	['x', 'y', 'z'],
];

let letter = 'z';

for (let i = 0; i < characters.length; i++) {
	console.log(characters[i].includes(letter));
}
