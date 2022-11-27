/**
 *	A simple module example: run with "node index.js"
 */

// import a module (the required "./" tells node to look in same directory)
const modEx = require('./module');

// the module will log the value
modEx.logHello();

// the module will return the value
console.log("[2]", modEx.returnHello());

// log a random num 0-1
console.log("[3]", modEx.randomNumber());

// log a random num 0-100
console.log("[4]", modEx.randomNumber(100));

// log the date
console.log("[5]", modEx.myDateTime());

// log the date (uses an exports function)
console.log("[6]", modEx.useExportsFunction());
