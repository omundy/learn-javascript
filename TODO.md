




&nbsp;

<a href="README.md"><img width="150" src="assets/img/logos/logo-javascript-150w.png"></a>

# Javascript Part.2
Advanced Javascript topics







&nbsp;
<!---
comments
-->
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


#### Review

- w3schools [String.match()](https://www.w3schools.com/jsref/jsref_match.asp), [javascript regular expressions](https://www.w3schools.com/js/js_regexp.asp)

#### Related

- Websites for testing regular expressions [regexr.com](https://regexr.com/), [regextester.com](https://www.regextester.com/)
- [my favorite regular expressions](https://gist.github.com/omundy/0edffc81af41f514d778e555b9bab954)

**Assessment**: Homework review





&nbsp;
<!---
comments
-->
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

**Assessment**: Homework review







&nbsp;
<!---
comments
-->
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
<!--
- Lecture:
- Demo:
- Exercise:
-->
#### Homework

- Haverbeke: [Ch6 The Secret Life of Objects](https://eloquentjavascript.net/06_object.html) (97-115)
- Codecademy:
 	- [8-1 Objects](https://www.codecademy.com/learn/introduction-to-javascript) (1-10)
	- [8-2 Advanced Objects](https://www.codecademy.com/learn/introduction-to-javascript) (1-11)
	- [9-1 Classes](https://www.codecademy.com/learn/introduction-to-javascript) (1-12)

#### Review

- Codecademy Cheatsheet(s) [Objects](reference-sheets/js-08-objects.pdf), [Classes](reference-sheets/js-09-classes.pdf)
- w3schools [this](https://www.w3schools.com/js/js_this.asp), [objects](https://www.w3schools.com/js/js_object_definition.asp), [properties](https://www.w3schools.com/js/js_object_properties.asp), [methods](https://www.w3schools.com/js/js_object_methods.asp), [classes](https://www.w3schools.com/js/js_class_intro.asp), [prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)

**Assessment**: Homework review








&nbsp;
<!---
comments
-->
## Errors and Debugging

**Overview**: How to create reusable code (classes or libraries) with standard interfaces

```js
"use strict";

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

**Assessment**: Homework review






&nbsp;
<!---
comments
-->
## Modules

**Overview**: How to create reusable code (classes or libraries) with standard interfaces

```js
// module example 1
let Course = {};
Course.name = "Javascript Node.js"
module.exports = Course;

// module example 2
// hello.js
export function hello(user) {
	console.log(`Hello, ${user}!`);
}
// main.js
import {hello} from './hello.js';
hello('John'); // Hello, John!
```
<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- Haverbeke: [Ch10 Modules](https://eloquentjavascript.net/10_modules.html) (167-178)
- Codecademy:
	- [10-1 Browser Compatibility and Transpilation](https://www.codecademy.com/learn/introduction-to-javascript) (1-11)
	- [11-1 Intermediate Javascript Modules](https://www.codecademy.com/learn/introduction-to-javascript) (1-15)

#### Review

- Codecademy Cheatsheet(s) [Compatibility](reference-sheets/js-10-compatibility.pdf), [modules](reference-sheets/js-11-modules.pdf)
- w3schools

**Assessment**: Homework review








&nbsp;
<!---
comments
-->
## Asynchronous Javascript Part.1

**Overview**: How to deal with events and latency using callbacks, promises, and async/await

```js
// callback example
function log(answer) {
	console.log("The answer is " + answer);
}
function sum(n1, n2, callback) {
	// sum n1, n2 and invoke callback function
	callback(n1 + n2);
}
// pass a function as a callback
sum(5, 5, log);

// promise example
function waitForPromise(param) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(param);
		}, 2000);
	});
}
// async function
async function test() {
	let str = "";
	// use await to wait for promise in synchronous code
	str += await waitForPromise("🤡");
	console.log(str);
	str += await waitForPromise(" lurks");
	console.log(str);
	str += await waitForPromise(" in the shadows");
	console.log(str);
}
test();
```

- Lecture: [Asynchronous Programming](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_247)

<!--
- Demo:
- Exercise:
-->

#### Homework

- Haverbeke: [Ch11 Asynchronous Programming](https://eloquentjavascript.net/11_async.html) (180-201)
- Codecademy:
 	- [12-1 Javascript Promises](https://www.codecademy.com/learn/introduction-to-javascript) (1-11)
	- [13-1 Async-Await](https://www.codecademy.com/learn/introduction-to-javascript) (1-9)
- Exercises: Ch11 [Tracking the scalpel](https://eloquentjavascript.net/11_async.html#i_UvyahfUnfl), [Building Promise.all](https://eloquentjavascript.net/11_async.html#i_Ug+Dv9Mmsw)

#### Review

- Codecademy Cheatsheet(s) [promises](reference-sheets/js-12-promises.pdf), [async-await](reference-sheets/js-13-async-await.pdf)
- w3schools [callbacks](https://www.w3schools.com/js/js_callback.asp), [asynchronous](https://www.w3schools.com/js/js_asynchronous.asp), [promises](https://www.w3schools.com/js/js_promise.asp), [async-await](https://www.w3schools.com/js/js_async.asp)
- See also: [Modern Asynchronous JavaScript with Async and Await](https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await)

**Assessment**: Homework review













&nbsp;
<!---
comments
-->
## Asynchronous Javascript Part.2

**Overview**: Get, Post, Put, Ajax, Fetch,

```js
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => {
		console.log(json);
	});
```
<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- Codecademy:
 	- [14-1 Requests I](https://www.codecademy.com/learn/introduction-to-javascript) (1-10)
	- [14-2 Requests II](https://www.codecademy.com/learn/introduction-to-javascript) (1-17)

#### Review

- Codecademy Cheatsheet(s) [Requests](reference-sheets/js-14-requests.pdf)
- w3schools [AJAX](https://www.w3schools.com/jquery/jquery_ajax_intro.asp), [jquery get/post](https://www.w3schools.com/jquery/jquery_ajax_get_post.asp), [fetch](https://www.w3schools.com/js/js_api_fetch.asp)

**Assessment**: Homework review
