

// note: open the HTML file in a browser to test
// must berun on a server

// import only hello() from lib.js
import { sayHello } from './lib-module.js';
// say hello
console.log(sayHello());


// import using destructing
// import {repeat, shout} from './lib-module.js';

// import all from lib.js
import * as LibModule from './lib-module.js';

// test the methods
console.log(LibModule.repeat('hello') + ' from lib-module repeat()');
// → 'hello hello hello from lib-module repeat()'
console.log(LibModule.shout('hello') + ' from lib-module shout()');
// → 'HELLO! from lib-module shout()'




// import a class
import ClassModule from './class-module.js';

// create a new instance (runs the constructor)
const MyClass = new ClassModule("hi");
// → 'hi from MyClass constructor()'
console.log(MyClass.hello());
// -> 'hello from MyClass hello()'
