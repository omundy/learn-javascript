/**
 *	Example code from quiz questions in Data Structures (Arrays, Objects, Loops)
 */



// Mark one of the two functions that accepts an array of numbers as a parameter and returns true if the number 7 is in that array and false otherwise.

// a
function a_has7(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 7) return true;
	}
	return false;
}

// b
function b_has7(arr) {
	if (arr.includes(7)) return true;
	else return false;
}

// c
function c_has7(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 7) return false;
	}
	return true;
}

// d
function d_has7(arr) {
	if (arr.includes(7)) return true;
	else return true;
}

let evenArr = [0, 2, 4, 6, 8];
let oddArr = [1, 3, 5, 7, 9];

console.log("a_has7", "evenArr", a_has7(evenArr));
console.log("a_has7", "oddArr", a_has7(oddArr));
console.log("b_has7", "evenArr", b_has7(evenArr));
console.log("b_has7", "oddArr", b_has7(oddArr));
console.log("c_has7", "evenArr", c_has7(evenArr));
console.log("c_has7", "oddArr", c_has7(oddArr));
console.log("d_has7", "evenArr", d_has7(evenArr));
console.log("d_has7", "oddArr", d_has7(oddArr));
