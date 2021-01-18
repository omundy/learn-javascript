"use strict";

// define a global variable
let globalVariable = "hello";

function doSomething(){
	// define a local variable
	let localVariable = 123;
	// this works because the variable was defined globally
	globalVariable = "goodbye?";
}
doSomething();

// this value was updated
console.log(globalVariable);
// -> "goodbye?"

// but this will fail
console.log(localVariable);
