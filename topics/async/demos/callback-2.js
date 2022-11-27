

/**
 *	2. another callback example
 */

// log the answer
function log(str) {
	console.log("The answer is " + str);
}
// sum n1, n2 and invoke callback function
function sum(n1, n2, callback) {
	callback(n1 + n2);
}
// pass a function as a callback
sum(5, 5, log);



// the above also could have been written like this

function sum(n1, n2, callback) {
	// sum n1, n2 and invoke callback function
	callback(n1 + n2);
}
// pass a function as a callback
sum(10, 10, function(str) {
	console.log("The answer is " + str);
});
