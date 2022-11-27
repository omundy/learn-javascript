

/**
 *	1. a simple callback example
 */

// pass data as a parameter
function hello(str) {
	console.log("🥰 hello, " + str);
}
hello("sue");


// pass a function as a parameter
function greeting(str, callback) {
	callback("🐝 greetings, " + str);
}
greeting("stan", console.log);


// same as above, w/custom function
function goodbye(str, callback) {
	callback("🐬 auf wiedersehen, " + str);
}
goodbye("!!🐬🐬🐬🐬🐬🐬!!!!!", function(str) {
	console.log(str);
});


console.log("---");
