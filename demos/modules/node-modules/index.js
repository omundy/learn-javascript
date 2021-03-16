// to use this module
let ColorModule = require('./nodeColorModule');
ColorModule.rand(); // -> "green"
ColorModule.rand(); // -> "blue"
ColorModule.color = "pink";
console.log(ColorModule.color); // -> "pink"
console.log(ColorModule.palette); // -> undefined
