
← [Learn Javascript](../README.md)

# Javascript Modules
Tutorials, references, and tips


> Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality — wikipedia



## The benefits of modularity

Modules are a way to split an application into separate files instead of having all of your application in one file. This concept is also present in other languages with minor differences in syntax and behavior, like C's `include`, Python's `import`, and so on. Modular design makes your application easy to understand, scale, and reuse.



## Modular design in Node

One big difference between Node.js modules and browser JavaScript is how one script's code is accessed from another script's code.

- In browser JavaScript, scripts are added via the `<script>` element. When they execute, they all have direct access to the global scope, a "shared space" among all scripts. Any script can freely define/modify/remove/call anything on the global scope.
- In Node.js, each module has its own scope. A module cannot directly access things defined in another module unless it chooses to expose them. To expose things from a module, they must be assigned to `exports` or `module.exports`. For a module to access another module's `exports` or `module.exports`, it must use `require()`.

```js
// nodeColorModule.js
var exports = module.exports = {}; // create exports object
// vars and methods are private by default unless we export them
let color = "",
	palette = ["red", "green", "blue"];
const log = () => { console.log(`The current color is ${color}`); };
// expose color var using get and set
exports.color = function() {
	return {
		get color() { return color; },
		set color(newColor) { color = newColor; }
	};
};
// expose a method
exports.rand = () => {
	color = palette[Math.floor(Math.random() * palette.length)];
	log(color);
};

// index.js
let ColorModule = require('nodeColorModule'); // import the module
ColorModule.rand(); // -> "green"
ColorModule.rand(); // -> "blue"
ColorModule.color = "pink";
console.log(ColorModule.color); // -> "pink"
console.log(ColorModule.palette); // -> undefined
```

NPM is a package repository service that hosts published JavaScript modules. `npm install` is a command that lets you download packages from their repository. The npm cli puts all the downloaded modules in a `node_modules` directory where you ran `npm install`.



## Modular design in the browser

Note that `require()`, `module.exports` and `exports` are APIs of a module system that is specific to Node.js. While browsers do not implement this module system, similar benefits can be achieved with the [Revealing Module Pattern](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s03.html).



## Revealing Module Pattern

The Revealing Module Pattern is a design pattern for Javascript *in a web browser* that mimics private and public access modifiers of other languages (e.g. C# or Java). All functions and variables are hidden by default within the scope of an IIFE (immediately-invoked function expression), and exposed as needed.

```js
// ColorModule.js
// add a new binding to the window object
window.ColorModule = (function() {
	// vars and methods are private by default unless we expose them
	let color = "",
		palette = ["red", "green", "blue"];
	const log = () => { console.log(`The current color is ${color}`); };
	// this method will be public
	function rand() {
		color = palette[Math.floor(Math.random() * palette.length)];
		log(color);
	}
	return {
		// expose method
		rand: rand,
		// expose color var using get and set
		get color() { return color; },
		set color(newColor) { color = newColor; }
	};
})();
// index.html -> script src points at above file so we invoke "public" methods
ColorModule.rand(); // -> "red"
ColorModule.rand(); // -> "green"
ColorModule.color = "magenta";
console.log(ColorModule.color); // -> "magenta"
console.log(ColorModule.palette); // -> undefined
```

### References
- w3schools [JavaScript Object Accessors](https://www.w3schools.com/js/js_object_accessors.asp), [Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
- Zach Caceres [The Revealing Module Pattern in Javascript](https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2#file-revealing-module-pattern-md)
- Cheatsheets [Modules](reference-sheets/js-11-modules.pdf)
