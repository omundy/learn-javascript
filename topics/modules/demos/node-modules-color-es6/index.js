/**
 *	A module example: run with "node index.js"
 */

let ColorModule = require('./nodeColorModule');
ColorModule.rand(); // -> "green"
ColorModule.rand(); // -> "blue"
ColorModule.color = "pink";
console.log(ColorModule.color); // -> "pink"
console.log(ColorModule.palette); // -> undefined
