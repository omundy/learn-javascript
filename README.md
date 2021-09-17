
![js logo](assets/img/logos/logo-javascript-150w.png) ![node logo](assets/img/logos/logo-node-ltgreen-150w.png)

<h1>Javascript & Node</h1>

A linear progression through full stack Javascript, with tutorials, exercises, and examples.

## About

- [Requirements](ABOUT.md#requirements) - Accounts, materials, etc.
- [Structure](ABOUT.md#structure) - How I use this material with the Madeline Hunter Lesson Plan
- [Prerequisites](ABOUT.md#prerequisites) - Suggested prerequisites before you begin
- [Credit](ABOUT.md#credit) & [License](ABOUT.md#license)


## Javascript Part.1

An introduction to the language

- [Introduction](javascript-1/1-0-introduction.md) - Introduction to Javascript, expressions, statements, and operators
- [Data & Variables](javascript-1/1-1-variables.md) - How to store and compare values and data types
- [Control Flow](javascript-1/1-2-control-flow.md) - Comparison and logical operators, conditional statements
- [Functions & Scope](javascript-1/1-3-functions-scope.md) - Reusing code, protecting variables
- [Data Structures](javascript-1/1-4-data-structures.md) - How to use arrays, objects, properties, methods, and loops














&nbsp;
<!---
comments
-->
## Control Flow, Functions, Loops

**Overview**: How to use bindings, conditionals, loops, and functions to let your code make decisions

- Lecture: [Control flow](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.g53c97a02bb_0_99), [Functions & Scope](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga4ca8d22b7_0_28)
- Demo: [The Lottery v.1](demos/games/the-lottery/) - your first game!
- Exercise: With a partner: [Gradebook Conditions](exercises/02-grade-book.md). Start homework...

```js
const isItTimeForPizza = () => {
    let today = new Date();
	if (today.getHours() > 10 && today.getHours() < 24){
		return "yes, it is";
	} else {
		return "I'm afraid not";
	}
}
console.log(isItTimeForPizza());
```

#### Homework

- Haverbeke:
	- [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (26-37)
	- [Ch3 Functions](https://eloquentjavascript.net/03_functions.html) (39-55)
- Codecademy:
 	- [2-1 Conditional Statements](https://www.codecademy.com/learn/introduction-to-javascript) (1–8)
	- [3-1 Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-7)
	- [4-1 Scope](https://www.codecademy.com/learn/introduction-to-javascript) (1-4)
- Exercises:
	- Ch2 [Looping a triangle](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [FizzBuzz](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [Chessboard](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe)
	- Ch3 [Minimum](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Recursion](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Bean Counting](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do)

#### Review

- Codecademy Cheatsheet(s) [conditionals](reference-sheets/js-02-conditionals.pdf), [functions](reference-sheets/js-03-functions.pdf), [scope](reference-sheets/js-04-scope.pdf)
- w3schools [operators](https://www.w3schools.com/js/js_operators.asp), [assignment](https://www.w3schools.com/js/js_assignment.asp), [arithmetic](https://www.w3schools.com/js/js_arithmetic.asp), [comparisons](https://www.w3schools.com/js/js_comparisons.asp), [conditions](https://www.w3schools.com/js/js_if_else.asp), [functions](https://www.w3schools.com/js/js_functions.asp), [arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)

**Assessment**: Quiz 2; Homework review







&nbsp;
<!---
comments
-->
## Data Structures

**Overview**: How to use arrays, objects, properties, methods, and loops

- Lecture: [Data Structures](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga4ca8d22b7_0_0)
- Demo: Arrays, Methods, Properties, Objects on the console

```js
// a new array
let myArray = [10,34,101];
// use the push() method to add a new value
myArray.push(521);
// get the length property
console.log(myArray.length);
// -> 4
// a new object
let myObject = {
	color1: "blue",
	color2: "gold"
};
```

#### Homework

- Haverbeke: [Ch4 Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html) (57-79)
- Codecademy:
	- [5-1 Arrays](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)
	- [6-1 Loops](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)
- Exercises: CH4 [The sum of a range](https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/), [Reversing an array](https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5), [A list](https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M), [Deep comparison](https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC)

#### Review

- Codecademy Cheatsheet(s) [arrays](reference-sheets/js-05-arrays.pdf), [loops](reference-sheets/js-06-loops.pdf)
- w3schools [arrays](https://www.w3schools.com/js/js_arrays.asp), [objects](https://www.w3schools.com/js/js_objects.asp), [json](https://www.w3schools.com/js/js_json_intro.asp), [json syntax](https://www.w3schools.com/js/js_json_syntax.asp), [methods](https://www.w3schools.com/js/js_htmldom_methods.asp), [for loop](https://www.w3schools.com/js/js_loop_for.asp), [break](https://www.w3schools.com/js/js_break.asp)

**Assessment**: Quiz 3; Homework review






&nbsp;
<!---
comments
-->
## jQuery and The DOM

**Overview**: How to access properties and methods in the HTML DOM with Javascript and jQuery

```js
// get the current URL
window.alert(document.URL);
// set a new value for the bgColor property
window.document.bgColor = "red"
// replace the content of the body
window.document.body.innerText = "😃"
// select all divs, set backgrounds red
$('div').css({ 'background': 'red' });
// select all elements with myClass, add text to end
$('.myClass').append(' - here is some new text');
```

- Lecture: [The DOM](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga8da2c3fcb_0_52), [jQuery](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.gb2d4fd0026_0_24)
- Demo: [The Lottery v.2](demos/games/the-lottery/) - responding to events, [The Lottery v.3](demos/games/the-lottery/) - displaying content in the browser
- Exercise: Add a way to spend more money in the lottery game

#### Homework

- Haverbeke:
	- [Ch13 JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html) (216-222)
	- [Ch14 The Document Object Model](https://eloquentjavascript.net/14_dom.html) (224-241)
- Exercises: Ch14 [Build a table](https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe), [Elements by tag name](https://eloquentjavascript.net/14_dom.html#i_VSftnyRTsV), [The cat’s hat](https://eloquentjavascript.net/14_dom.html#i_b/LAqZUqyo)

#### Review

- Codecademy Cheatsheet(s) [jquery introduction](reference-sheets/jquery-01-introduction.pdf), [effects](reference-sheets/jquery-02-effects.pdf)
- w3schools [DOM](https://www.w3schools.com/js/js_htmldom.asp), [HTML DOM](https://www.w3schools.com/js/js_htmldom_html.asp)

**Assessment**: Quiz 4; Homework review










&nbsp;
<!---
comments
-->
## Forms and Events

**Overview**: Events and using forms with Javascript and jQuery

```js
// click event with callback
$('#submitButton').click(function() {
	// set the value of a form element
	$('#color').val("purple");
	// do not perform the default form action
	return false;
});
```

- Lecture: [Forms & Events](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga4ca8d22b7_0_115)
- Demo: [The Lottery v.2](demos/games/the-lottery/) - responding to events, [The Lottery v.3](demos/games/the-lottery/) - displaying content in the browser
- Exercise: Add a way to spend more money in the lottery game


#### Homework

- Haverbeke:
	- [Ch15 Handling Events](https://eloquentjavascript.net/15_event.html) (243-259)
	- [Ch18 HTTP and Forms](https://eloquentjavascript.net/18_http.html) (308-328)
- Exercises:
	- Ch15 [Balloon](https://eloquentjavascript.net/15_event.html#i_ZPJB9UFdQA), [Mouse trail](https://eloquentjavascript.net/15_event.html#i_NOgRH0Y9st), [Tabs](https://eloquentjavascript.net/15_event.html#i_Kk1WKx2anJ)
	- Ch18 [Content negotiation](https://eloquentjavascript.net/18_http.html#i_uaWwL8WGXf), [A JavaScript workbench](https://eloquentjavascript.net/18_http.html#i_wTXvIH5Wds), [Conway’s Game of Life](https://eloquentjavascript.net/18_http.html#i_XyKQVmCbTN)

#### Review

- Codecademy Cheatsheet(s) [jquery events](reference-sheets/jquery-03-events.pdf), [style methods](reference-sheets/jquery-04-style-methods.pdf), [dom traversing](reference-sheets/jquery-05-dom-traversing.pdf)
- w3schools [jQuery intro](https://www.w3schools.com/jquery/jquery_intro.asp), [Get Started](https://www.w3schools.com/jquery/jquery_get_started.asp), [syntax](https://www.w3schools.com/jquery/jquery_syntax.asp), [selectors](https://www.w3schools.com/jquery/jquery_selectors.asp), [event methods](https://www.w3schools.com/jquery/jquery_events.asp)
- w3schools [Javascript practice](https://www.w3schools.com/js/exercise_js.asp)

**Assessment**: Quiz 5; Homework review











&nbsp;

![js logo](assets/img/logos/logo-javascript-75w.png)

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
