
// note: run this file with "node index.js" to test 

let ColorModule = require('./nodeColorModule');
ColorModule.rand(); // -> "green"
ColorModule.rand(); // -> "blue"
ColorModule.color = "pink";
console.log(ColorModule.color); // -> "pink"
console.log(ColorModule.palette); // -> undefined
