

/**
 *	A simple promise example
 */

// create a new promise
var promise = new Promise(function(resolve, reject) {
	// do a thing, possibly async
	let success = true;
	// then if it was successful
	if (success) {
		resolve("The promise resolved!");
	} else {
		reject(Error("The promise was rejected!"));
	}
});
// consume the promise
promise.then(function(result) {
	console.log(result);
}, function(err) {
	console.error(err);
});
