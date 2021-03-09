
![js logo](reference-sheets/images/logo-javascript-150w.png) ![node logo](reference-sheets/images/logo-node-ltgreen-150w.png)

<h1>Javascript & Node</h1>


A linear progression through full stack Javascript, with tutorials, exercises, and examples to:

- Interact with the DOM, HTML, and CSS inside web browsers
- Use libraries like jQuery, Anime.js, etc.
- Run Javascript, Node.js, and NPM on the command line
- Build a dynamic Node/Express website and API server
- Create browser extensions, data visualization, games, desktop and mobile apps and other UIs with Javascript

This path to Javascript unites many materials (lectures, demos, milestones, exercises, etc.) with corresponding homework (book chapters, practice, exercises, etc.) to support my web courses, DIG 245 Critical Web Design and DIG 345 Radical Software in [Digital Studies](https://www.davidson.edu/academic-departments/digital-studies) at Davidson College.


### Contents

<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Prerequisites](#prerequisites)
	- [HTML and CSS](#html-and-css)
- [Javascript Part.1](#javascript-part1)
	- [Introduction](#introduction)
	- [Values, Types, Operators](#values-types-operators)
	- [Control Flow, Functions, Loops](#control-flow-functions-loops)
	- [Data Structures](#data-structures)
	- [jQuery and The DOM](#jquery-and-the-dom)
	- [Forms and Events](#forms-and-events)
- [Javascript Part.2](#javascript-part2)
	- [Regular Expressions](#regular-expressions)
	- [Higher-order functions](#higher-order-functions)
	- [Object Oriented Programming](#object-oriented-programming)
	- [Errors and Debugging](#errors-and-debugging)
	- [Modules](#modules)
	- [Asynchronous Javascript Part.1](#asynchronous-javascript-part1)
	- [Asynchronous Javascript Part.2](#asynchronous-javascript-part2)
- [Node Express Part.1](#node-express-part1)
	- [Node Installation](#node-installation)
	- [Node Express Introduction](#node-express-introduction)
	- [File Organization and Testing](#file-organization-and-testing)
	- [Requests & Templating](#requests-templating)
	- [Forms & Sessions](#forms-sessions)
	- [Middleware & Production](#middleware-production)
- [Node Express Part.2](#node-express-part2)
	- [Express and databases](#express-and-databases)
	- [Express routes, APIs, JSON](#express-routes-apis-json)
	- [Express SPAs, static content](#express-spas-static-content)
	- [Express security, APIs](#express-security-apis)
	- [Express debugging, production](#express-debugging-production)
- [Other Javascript Frameworks and Libraries](#other-javascript-frameworks-and-libraries)
- [Tools](#tools)

<!-- /TOC -->

### Requirements

Anyone is welcome to fork the repo and use this course structure. You can view the [github.io](https://omundy.github.io/learn-javascript/) version and execute examples there. You will need the following books, prior experience with HTML and CSS, and (potentially) accounts with Github, Codecademy, and Codepen:

- Marijn Haverbeke [Eloquent JavaScript](https://eloquentjavascript.net/) 3rd edition (2018) [github](https://github.com/marijnh/Eloquent-JavaScript)
- Ethan Brown [Web Development with Node & Express](https://www.oreilly.com/library/view/web-development-with/9781492053507/) 2nd Edition (2019) [github](https://github.com/EthanRBrown/web-development-with-node-and-express-2e)









### Structure

Each section or class period is structured following the [Hunter Lesson Plan](https://thesecondprinciple.com/teaching-essentials/models-of-teaching/madeline-hunter-lesson-plan-model/) with approximate time estimates:
```
- Homework (items to be completed prior to each class)
	- 1 hour: Read book chapters
	- 1 hour: Do Codecademy practice
	- 1 hour: Independent practice, exercises in book
	- 30 min: Review lecture from class, reference sheet, w3schools
- In class (the class period, online or f2f)
	- 20 min: Evaluation - Quiz on, and then review of, homework material
	- 20 min: Introduction to new material - Lecture and demo
	- 20-40 min: Guided practice - Exercises and start homework
```



# Prerequisites
A review of the command line, Git, HTML, CSS, and Bootstrap

## HTML and CSS

1. HTML (Hyper-Text Markup Language) provides the structure for web pages
1. CSS (Cascading Style Sheets) is the language used to control the **presentation** of the HTML

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>A simple web page</title>
		<style>
			h1 { background: magenta; }
		</style>
	</head>
	<body>
		<h1>Hello world!</h1>
	</body>
</html>
```








&nbsp;

![js logo](reference-sheets/images/logo-javascript-75w.png)

# Javascript Part.1
A quick introduction to the language



&nbsp;
<!---
comments
-->
## Introduction

**Overview**: What, where, and how to run Javascript; Introduction to expressions, statements, and operators

- Lecture: [Javascript Introduction](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit?usp=sharing)
- Exercise: [Test Javascript expressions in the Dev Console or a Code Playground](exercises/00-expressions.md).

```js
// You can execute this code right in the Javascript console
console.log("Hello world!");
console.log(1 + 1);
console.log(1 + "1");
console.log(typeof "1");
```

#### Review

- w3schools [intro](https://www.w3schools.com/js/js_intro.asp), [installation](https://www.w3schools.com/js/js_whereto.asp), [output](https://www.w3schools.com/js/js_output.asp), [statements](https://www.w3schools.com/js/js_statements.asp), [syntax](https://www.w3schools.com/js/js_syntax.asp), [comments](https://www.w3schools.com/js/js_comments.asp), [operators](https://www.w3schools.com/js/js_operators.asp)







&nbsp;
<!---
comments
-->
## Values, Types, Operators

**Overview**: How to store and compare values and data types

- Lecture: [Data & Variables](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga0a6e47c90_0_44)
- Exercise: Start homework...

```js
// bind a string
let question = "Can we celebrate yet?";
// store an instance of the date object
let today = new Date();
// concatenate the string binding with the return value from an expression
console.log(question + " " + (today.getFullYear() > 2020))
```

#### Homework

- Haverbeke:
	- [Introduction](https://eloquentjavascript.net/00_intro.html) (1-8)
	- [Ch1 Values, Types, and Operators](https://eloquentjavascript.net/01_values.html) (10-20)
	- [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-26)
- Codecademy:
 	- [1-1 Introduction to Javascript](https://www.codecademy.com/learn/introduction-to-javascript) (1–8)
	- [1-2 Variables](https://www.codecademy.com/learn/introduction-to-javascript) (1–6)

#### Review

- Codecademy Cheatsheet(s) [Javascript Introduction](reference-sheets/js-01-introduction.pdf)
- w3schools [variables](https://www.w3schools.com/js/js_variables.asp), [data types](https://www.w3schools.com/js/js_datatypes.asp), [Date Object](https://www.w3schools.com/jsref/jsref_obj_date.asp)

**Assessment**: Quiz 1








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

![js logo](reference-sheets/images/logo-javascript-75w.png)

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








&nbsp;

<!---
comments
-->

![node logo](reference-sheets/images/logo-node-ltgreen-75w.png) &nbsp; ![express logo](reference-sheets/images/logo-express-200w.png)

# Node Express Part.1
Introduction to Node and Express






&nbsp;
<!---
comments
-->
## Node Installation

**Overview**: How to install node and npm on your machine. There are three ways, I recommend #2

1. Use an [installer via node website](https://nodejs.org/en/download/). **Not recommended** because it is difficult to upgrade.
1. Installing using a system package manager (below) gives you flexibility to update or change versions later.
1. Installing using [nvm](https://github.com/nvm-sh/nvm) is the most flexible method but potentially adds complexity for new users.

**Mac** - Install [homebrew](https://brew.sh/) (Mac package manager), then [node](https://formulae.brew.sh/formula/node)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

**Windows** - Install [chocolatey](https://chocolatey.org/) (Windows package manager) using [these instructions](https://www.youtube.com/watch?v=KTUO1g_Btfk&ab_channel=SonarSystems)

```bash
choco install nodejs
```

#### After node is installed

```bash
node -v                    # check node version
npm -v                     # check npm version
npm install -g nodemon     # install nodemon globally, auto-restart projects on file change
```


- Lecture: [DIG 245 Review](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_58), [Web Applications](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_22), [Node Introduction](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_27), [Node Installation](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_236), [Asynchronous Programming](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_247)
- Demo: Install node, confirm version #

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/):
	- Ch1 Introducing Express (1-9)
	- Ch2 Getting Started with Node (11-20)

#### Review
- w3schools [nodejs](https://www.w3schools.com/nodejs/default.asp), [intro](https://www.w3schools.com/nodejs/default.asp), [command line](https://www.w3schools.com/nodejs/nodejs_get_started.asp), [npm](https://www.w3schools.com/nodejs/nodejs_npm.asp)





&nbsp;
<!---
comments
-->
## Node Express Introduction

**Overview**: How to get started with node and express

Setup your project
```bash
mkdir express-site && cd express-site  # make a new directory and move to it
npm init                               # create a node project in the new directory
npm install express                    # install express
```

```js
// import package
const express = require('express');
// create express app
const app = express();
// set port either from env file or default
const port = process.env.PORT || 3000;
// add routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});
// start server and listen on <port>
app.listen(port, () => console.log(
	`Express started on http://localhost:${port}; press Ctrl-C to terminate.`
));
```

- Lecture: [Node Express Introduction](https://docs.google.com/presentation/d/17bIeMMJnZQy-tb3GLhMC3JuTfcgMEOqnK4WsCt52CLM/edit#slide=id.gafb807d421_0_33)
- Demo:
- Exercise: Start homework...


#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/):
	- Ch3 Saving Time with Express (21-30)
	- Ch4 Tidying Up (31–39)
- Exercise: Begin Meadowlark Website

#### Review

- Codecademy Cheatsheet(s) [node introduction](reference-sheets/node-01-introduction.pdf)
- w3schools [modules](https://www.w3schools.com/nodejs/nodejs_modules.asp), [http module](https://www.w3schools.com/nodejs/nodejs_http.asp), [file system module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp), [url module](https://www.w3schools.com/nodejs/nodejs_url.asp)
- Express [hello world](https://expressjs.com/en/starter/hello-world.html), [basic routing](https://expressjs.com/en/starter/basic-routing.html), [static files](https://expressjs.com/en/starter/static-files.html)

**Assessment**: Homework review









&nbsp;
<!---
comments
-->
## Testing

**Overview**: How to use linters and write unit and integration tests

```js
// 1. add and use custom module
const fortune = require('./lib/fortune');
app.get('/about', (req, res) => {
	res.render('about', { fortune: fortune.getFortune() });
});

// 2.
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/):
	- Ch5 Quality Assurance (41–58)
- Exercise: Add testing to Meadowlark Website

#### Review


**Assessment**: Homework review








&nbsp;
<!---
comments
-->
## Requests and Templating

**Overview**: How to ... Express request, response, Handlebars, MVC

```js
const tours = [
	{ id: 0, name: 'Hood River', price: 99.99 },
	{ id: 1, name: 'Oregon Coast', price: 149.95 },
];
app.get ('/api/tours', (req, res) => res.json(tours));
```

- Lecture: [Node, Express, Handlebars, Heroku - Part 1 - Set up a node express project template
](https://docs.google.com/presentation/d/17bIeMMJnZQy-tb3GLhMC3JuTfcgMEOqnK4WsCt52CLM/edit#slide=id.gafb807d421_0_39)
- Demo: [omundy/sample-node-express-template](https://github.com/omundy/sample-node-express-template) and [live demo](https://sample-node-express-template.herokuapp.com/)


#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch6 Request and Response (59-72)
	- Ch7 Templating with Handlebars (73-88)

#### Review

- APIs


**Assessment**: Homework review






&nbsp;
<!---
comments
-->
## Forms and Sessions

**Overview**: How to ... Express web forms, sessions

```js
app.get ( '/newsletter', handlers.newsletter );
app.post ( '/api/newsletter-signup', handlers.api.newsletterSignup );
```

- Lecture: [Node, Express, Handlebars, Heroku - Part 2 - Use API data, add a frontend](https://docs.google.com/presentation/d/17bIeMMJnZQy-tb3GLhMC3JuTfcgMEOqnK4WsCt52CLM/edit#slide=id.gbcac1199e9_0_15)
- Demo: [omundy/sample-node-express-username-generator](https://github.com/omundy/sample-node-express-username-generator) and [live demo](https://sample-node-express-username.herokuapp.com/)

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch8 Form Handling (89-100)
	- Ch9 Cookies and Sessions (103-112)

#### Review

**Assessment**: Homework review







&nbsp;
<!---
comments
-->
## Middleware and Production

**Overview**: How to use middleware, send email, PM2

```js
app.use (( req, res, next ) => {
	console.log ( `processing request for ${ req.url } ....` );
	next ();
});

```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch10 Middleware (113-120)
	- Ch11 Sending Email (121-131)
	- Ch12 Production Concerns (133-145)

#### Review

**Assessment**: Homework review









&nbsp;

<!---
comments
-->

![node logo](reference-sheets/images/logo-node-ltgreen-75w.png) &nbsp; ![express logo](reference-sheets/images/logo-express-200w.png)

# Node Express Part.2
Using Node, Express for server-side, desktop, and mobile application development





&nbsp;
<!---
comments
-->
## Express and databases

**Overview**: How to ...

```js
const mongoose = require ( 'mongoose' );
const { connectionString } = credentials.mongo;
mongoose.connect ( connectionString );

```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch13 Persistence (147-172)

#### Review

- [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), [Revealing Module](https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2#file-revealing-module-pattern-md), and other [Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

**Assessment**: Homework review






&nbsp;
<!---
comments
-->
## Express routes, APIs, JSON

**Overview**: How to ...

```js
app.get ( '/user(name)?', ( req, res ) => res.render ( 'user' ));
app.get ( '/staff/:name', ( req, res ) => {
	const info = staff [ req.params.name ];
	if ( !info ) return next (); // will eventually fall through to 404
	res.render ( 'staff', info );
});


```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch14 Routing (173-184)
	- Ch15 REST APIs and JSON (185-192)

#### Review

**Assessment**: Homework review




&nbsp;
<!---
comments
-->
## Express SPAs, static content

**Overview**: How to ...

```js
import React from 'react';

// ...
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch16 Single-Page Applications (193-212)
	- Ch17 Static Content (215-221)

#### Review

**Assessment**: Homework review





&nbsp;
<!---
comments
-->
## Express security, APIs

**Overview**: How to ...

```js
const passport = require ( 'passport' );
const db = require ( '../db' );

// ...
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch18 Security (223-248)
	- Ch19 Third Party APIs (249-263)

#### Review

**Assessment**: Homework review





&nbsp;
<!---
comments
-->
## Express debugging, production

**Overview**: How to ...

```bash
node inspect index.js
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch20 Debugging (265-275)
	- Ch21 Going Live (277-288) - https://heroku.com/
	- Ch22 Maintenance (291-300)

#### Review


**Assessment**: Homework review







# Other Javascript Frameworks and Libraries
Javascript / Node for data visualization, mapping, browser extensions, desktop and mobile apps, and more...



## Data Visualization
Data visualization with Javascript

See this page [js-topics-visualization.md](js-topics-visualization.md) for information about developing charts and data visualizations with Javascript.


## Browser Extensions
Extensions literally "extend" what browsers can do by adding additional functionality

See this page [js-topics-extensions.md](js-topics-extensions.md) for information about developing browser extensions.


### Mapping

See this page [js-topics-maps.md](js-topics-mapping.md) for information about developing interactive maps with Javascript.








## Animation

- https://animejs.com/
- https://threejs.org/
- https://www.createjs.com/tweenjs
- https://blog.bitsrc.io/11-javascript-animation-libraries-for-2018-9d7ac93a2c59


### Games

- https://phaser.io/
- https://piqnt.com/planck.js/
- https://impactjs.com/
- https://colorlib.com/wp/javascript-engines-for-building-games/






### UI Frameworks

- https://vuejs.org/
- https://reactjs.org/
- https://angular.io/


### Desktop Applications

- https://www.electronjs.org/ [Quick start](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites)
- https://techbeacon.com/app-dev-testing/how-use-nodejs-build-premise-desktop-apps
- https://livebook.manning.com/book/cross-platform-desktop-applications/part-1/


### Mobile Applications

- https://ionicframework.com/
- https://code.janeasystems.com/nodejs-mobile
- https://rapidapi.com/blog/how-to-create-a-mobile-app-with-nodejs/


### More Possibilities

- https://getflywheel.com/layout/best-javascript-libraries-frameworks-2020/
- https://en.wikipedia.org/wiki/List_of_JavaScript_libraries




# Tools


- https://jshint.com/
- https://euangoddard.github.io/clipboard2markdown/
