




## Regular Expressions

**Overview**: How to use regular expressions in Javascript

```js
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while (match = number.exec(input)) {
	console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40
```

#### Homework

- Haverbeke: [Ch9 Regular Expressions](https://eloquentjavascript.net/09_regexp.html) (82-95)


## Reference

- w3schools [String.match()](https://www.w3schools.com/jsref/jsref_match.asp), [javascript regular expressions](https://www.w3schools.com/js/js_regexp.asp)

#### Related

- Websites for testing regular expressions [regexr.com](https://regexr.com/), [regextester.com](https://www.regextester.com/)
- [my favorite regular expressions](https://gist.github.com/omundy/0edffc81af41f514d778e555b9bab954)







## Higher-order functions

**Overview**: How to use higher-order functions in Javascript

```js
// filter an array based on a rule
console.log([5, 233, -21, 507, 14].filter(n => n > 10));
// apply a transformation to each item in an array
console.log(["red","blue","green"].map(c => "light" + c));
// reduce an array to a single value using some function
console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// return true if any elements in an array pass a test
console.log([5, 233, -21, 507, 14].some(n => n > 10));
```

#### Homework

- Haverbeke: [Ch5 Higher-order Functions](https://eloquentjavascript.net/05_higher_order.html) (82-95)
- Codecademy:
 	- [7-1 Higher-Order Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-4)
	- [7-2 Iterators](https://www.codecademy.com/learn/introduction-to-javascript) (1-9)

#### Review

- Codecademy Cheatsheet(s) [iterators](reference-sheets/js-07-iterators.pdf)
- w3schools [Array.forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp), [Array.filter()](https://www.w3schools.com/jsref/jsref_filter.asp), [Array.map()](https://www.w3schools.com/jsref/jsref_map.asp), [Array.reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp), [Array.some()](https://www.w3schools.com/jsref/jsref_some.asp)









## Object Oriented Programming

**Overview**: How to create custom objects and classes, and use properties, methods, and prototypes

```js
class Dog {
	constructor(name) {
	  	this._name = name;
	}
	introduce() {
		console.log('This is ' + this._name + ' !');
	}
	// a static method
	static bark() {
		console.log('Woof!');
	}
}
const hankDog = new Dog('Hank');
hankDog.introduce();
Dog.bark();
```

#### Homework

- Haverbeke: [Ch6 The Secret Life of Objects](https://eloquentjavascript.net/06_object.html) (97-115)
- Codecademy:
 	- [8-1 Objects](https://www.codecademy.com/learn/introduction-to-javascript) (1-10)
	- [8-2 Advanced Objects](https://www.codecademy.com/learn/introduction-to-javascript) (1-11)
	- [9-1 Classes](https://www.codecademy.com/learn/introduction-to-javascript) (1-12)

#### Review

- Codecademy Cheatsheet(s) [Objects](reference-sheets/js-08-objects.pdf), [Classes](reference-sheets/js-09-classes.pdf)
- w3schools [this](https://www.w3schools.com/js/js_this.asp), [objects](https://www.w3schools.com/js/js_object_definition.asp), [properties](https://www.w3schools.com/js/js_object_properties.asp), [methods](https://www.w3schools.com/js/js_object_methods.asp), [classes](https://www.w3schools.com/js/js_class_intro.asp), [prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)









## Errors and Debugging

**Overview**: How to create reusable code (classes or libraries) with standard interfaces

```js
console.log("a regular message");
console.error("an error message")
```

- Lecture: [Debugging HTML CSS JS and Networks](https://docs.google.com/presentation/d/1X1sPqk5rhafSDTbg1SEhCLcw0qJz1qZ-pnh0WE4MP1c/edit#slide=id.p)
- Demo: How to use Dev Tools


#### Homework

- Haverbeke: [Ch8 Bugs and Errors](https://eloquentjavascript.net/08_error.html) (128-142)
- Exercises: [Retry](https://eloquentjavascript.net/08_error.html#i_n1zYouiAfX), [The locked box](https://eloquentjavascript.net/08_error.html#i_iGlwnUbkRs)

#### Review

- Codecademy Cheatsheet(s) [compatibility](reference-sheets/js-10-compatibility.pdf)
- w3schools [use strict](https://www.w3schools.com/js/js_strict.asp), [debugging](https://www.w3schools.com/js/js_debugging.asp)
- [caniuse.com](https://caniuse.com)
- [Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript)
- [The 16 JavaScript debugging tips you probably didn’t know](https://raygun.com/learn/javascript-debugging-tips)
