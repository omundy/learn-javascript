/**
 *	Node Hello World!
 */


// 1. Node is just Javascript, for the command line
// To run the code in this file with Node, just type (w/o quotes) "node index.js"

let greeting = "1. Hello, from Node";
console.log(greeting);

// Node is capable of much more...



// 2. Node can import custom modules

// import the module (see inside for details)
var basicModule = require('./basic-module');
console.log(`2. The date returned from the module: ${basicModule.dateTimeISO()}`);



// 3. Node can read / ride files on your computer

// import a built-in package
let fs = require("fs");

// write to a file
fs.appendFile("hello.csv", `Node updated this file at: ${basicModule.dateTimeISO()}\n`, function (err) {
	if (err) throw err;
	console.log('3. The CSV file was updated with a new date!');
});
