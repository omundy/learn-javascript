/**
 *	A simple module
 */

// create the exports object
var exports = module.exports = {};

// store function expression inside obj
exports.logHello = function() {
	console.log("[1] Hello, World! (logged from the module)");
};

exports.returnHello = function() {
	return "Hello, World! (returned from the module)";
};

exports.randomNumber = (max = 1) => {
	return Math.random() * max;
};

exports.myDateTime = function() {
	return new Date();
};

exports.useExportsFunction = function(){
	return exports.myDateTime().toUTCString();
};
