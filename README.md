
![js logo](assets/img/logo-javascript-150w.png) ![js logo](assets/img/logo-node-ltgreen-150w.png)

<h1>Javascript & Node</h1>


A linear progression through full stack Javascript, with tutorials, exercises, and examples demonstrating uses like:

- Interacting with the DOM, HTML, and CSS inside web browsers
- Using libraries like jQuery, Anime.js, etc.
- Running Javascript, Node.js, and NPM on the command line
- Building a Node/Express website and API server
- Creating browser extensions with Javascript

This path to Javascript unites many materials (lectures, demos, milestones, exercises, etc.) with corresponding homework (book chapters, practice, exercises, etc.) to support my web courses, DIG 245 Critical Web Design and DIG 345 Radical Software in [Digital Studies](https://www.davidson.edu/academic-departments/digital-studies) at Davidson College.


### Outline

<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Javascript Part.1](#javascript-part1)
	- [Introduction](#introduction)
	- [Values, Types, Operators](#values-types-operators)
	- [Control Flow, Functions, Loops](#control-flow-functions-loops)
	- [Data Structures](#data-structures)
	- [jQuery and The DOM](#jquery-and-the-dom)
	- [Forms and Events](#forms-and-events)
- [Javascript Part.2](#javascript-part2)
	- [Higher-order functions](#higher-order-functions)
	- [Object Oriented Programming](#object-oriented-programming)
	- [Modules](#modules)
	- [Asynchronous Javascript Part.1](#asynchronous-javascript-part1)
	- [Asynchronous Javascript Part.2](#asynchronous-javascript-part2)
- [Node Express Part.1](#node-express-part1)
	- [Node Introduction](#node-introduction)
- [get the node version](#get-the-node-version)
	- [Node and Express](#node-and-express)
	- [Node Testing](#node-testing)
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

<!-- /TOC -->

### Requirements

Anyone is welcome to fork the repo and use this course structure. You can view the [github.io](https://omundy.github.io/learn-javascript/) version and execute examples there. You will need the following books, prior experience with HTML and CSS, and (potentially) accounts with Github, Codecademy, and Codepen:

- Marijn Haverbeke [Eloquent JavaScript](https://eloquentjavascript.net/) 3rd edition (2018) [solutions](https://github.com/marijnh/Eloquent-JavaScript/tree/master/code/solutions)
- Ethan Brown [Web Development with Node & Express](https://www.oreilly.com/library/view/web-development-with/9781492053507/) 2nd Edition (2019)









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





# Javascript Part.1
A quick introduction to the language



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

- Haverbeke: [Introduction](https://eloquentjavascript.net/00_intro.html) (1-8), [Ch1 Values, Types, and Operators](https://eloquentjavascript.net/01_values.html) (10-20), [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-26)
- Codecademy: [1-1 Introduction to Javascript](https://www.codecademy.com/learn/introduction-to-javascript) (1–8), [1-2 Variables](https://www.codecademy.com/learn/introduction-to-javascript) (1–6)

#### Review

- Codecademy Cheatsheet(s) [Javascript Introduction](reference-sheets/JS-01-Introduction.pdf)
- w3schools [variables](https://www.w3schools.com/js/js_variables.asp), [data types](https://www.w3schools.com/js/js_datatypes.asp), [Date Object](https://www.w3schools.com/jsref/jsref_obj_date.asp)

**Assessment**: Quiz 1








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

- Haverbeke: [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (26-37), [Ch3 Functions](https://eloquentjavascript.net/03_functions.html) (39-55)
- Codecademy: [2-1 Conditional Statements](https://www.codecademy.com/learn/introduction-to-javascript) (1–8), [3-1 Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-7), [4-1 Scope](https://www.codecademy.com/learn/introduction-to-javascript) (1-4)
- Exercises:
	- Ch2 [Looping a triangle](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [FizzBuzz](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [Chessboard](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe)
	- Ch3 [Minimum](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Recursion](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Bean Counting](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do)

#### Review

- Codecademy Cheatsheet(s) [Conditionals](reference-sheets/JS-02-Conditionals.pdf), [functions](reference-sheets/JS-03-Functions.pdf), [scope](reference-sheets/JS-04-Scope.pdf)
- w3schools [operators](https://www.w3schools.com/js/js_operators.asp), [assignment](https://www.w3schools.com/js/js_assignment.asp), [arithmetic](https://www.w3schools.com/js/js_arithmetic.asp), [comparisons](https://www.w3schools.com/js/js_comparisons.asp), [conditions](https://www.w3schools.com/js/js_if_else.asp), [functions](https://www.w3schools.com/js/js_functions.asp), [arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)

**Assessment**: Quiz 2; Homework review







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
- Codecademy: [5-1 Arrays](https://www.codecademy.com/learn/introduction-to-javascript) (1–7), [6-1 Loops](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)
- Exercises: CH4 [The sum of a range](https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/), [Reversing an array](https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5), [A list](https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M), [Deep comparison](https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC)

#### Review

- Codecademy Cheatsheet(s) [arrays](reference-sheets/JS-05-Arrays.pdf), [loops](reference-sheets/JS-06-Loops.pdf)
- w3schools [arrays](https://www.w3schools.com/js/js_arrays.asp), [objects](https://www.w3schools.com/js/js_objects.asp), [json](https://www.w3schools.com/js/js_json_intro.asp), [json syntax](https://www.w3schools.com/js/js_json_syntax.asp), [methods](https://www.w3schools.com/js/js_htmldom_methods.asp), [for loop](https://www.w3schools.com/js/js_loop_for.asp), [break](https://www.w3schools.com/js/js_break.asp)

**Assessment**: Quiz 3; Homework review






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

- Haverbeke: [Ch13 JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html) (216-222), [Ch14 The Document Object Model](https://eloquentjavascript.net/14_dom.html) (224-241)
- Codecademy: none
- Exercises: Ch14 [Build a table](https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe), [Elements by tag name](https://eloquentjavascript.net/14_dom.html#i_VSftnyRTsV), [The cat’s hat](https://eloquentjavascript.net/14_dom.html#i_b/LAqZUqyo)

#### Review

- w3schools [DOM](https://www.w3schools.com/js/js_htmldom.asp), [HTML DOM](https://www.w3schools.com/js/js_htmldom_html.asp)

**Assessment**: Quiz 4; Homework review







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

- Haverbeke: [Ch15 Handling Events](https://eloquentjavascript.net/15_event.html) (243-259), [Ch18 HTTP and Forms](https://eloquentjavascript.net/18_http.html) (308-328)
- Codecademy: none
- Exercises:
	- Ch15 [Balloon](https://eloquentjavascript.net/15_event.html#i_ZPJB9UFdQA), [Mouse trail](https://eloquentjavascript.net/15_event.html#i_NOgRH0Y9st), [Tabs](https://eloquentjavascript.net/15_event.html#i_Kk1WKx2anJ)
	- Ch18 [Content negotiation](https://eloquentjavascript.net/18_http.html#i_uaWwL8WGXf), [A JavaScript workbench](https://eloquentjavascript.net/18_http.html#i_wTXvIH5Wds), [Conway’s Game of Life](https://eloquentjavascript.net/18_http.html#i_XyKQVmCbTN)

#### Review

- w3schools [jQuery intro](https://www.w3schools.com/jquery/jquery_intro.asp), [Get Started](https://www.w3schools.com/jquery/jquery_get_started.asp), [syntax](https://www.w3schools.com/jquery/jquery_syntax.asp), [selectors](https://www.w3schools.com/jquery/jquery_selectors.asp), [event methods](https://www.w3schools.com/jquery/jquery_events.asp)

**Assessment**: Quiz 5; Homework review















# Javascript Part.2
Advanced Javascript topics


<!---
comments
-->

## Higher-order functions

**Overview**: How to use higher-order functions with arrays in Javascript

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
- Codecademy: [7-1 Higher-Order Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-4), [7-2 Iterators](https://www.codecademy.com/learn/introduction-to-javascript) (1-9)

#### Review

- Codecademy Cheatsheet(s) [iterators](reference-sheets/JS-07-Iterators.pdf)
- w3schools [Array.forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp), [Array.filter()](https://www.w3schools.com/jsref/jsref_filter.asp), [Array.map()](https://www.w3schools.com/jsref/jsref_map.asp), [Array.reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp), [Array.some()](https://www.w3schools.com/jsref/jsref_some.asp)

**Assessment**: Homework review







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
- Codecademy: [8-1 Objects](https://www.codecademy.com/learn/introduction-to-javascript) (1-10), [8-2 Advanced Objects](https://www.codecademy.com/learn/introduction-to-javascript) (1-11), [9-1 Classes](https://www.codecademy.com/learn/introduction-to-javascript) (1-12)

#### Review

- Codecademy Cheatsheet(s) [Objects](reference-sheets/JS-08-Objects.pdf), [Classes](reference-sheets/JS-09-Classes.pdf)
- w3schools [this](https://www.w3schools.com/js/js_this.asp), [objects](https://www.w3schools.com/js/js_object_definition.asp), [properties](https://www.w3schools.com/js/js_object_properties.asp), [methods](https://www.w3schools.com/js/js_object_methods.asp), [classes](https://www.w3schools.com/js/js_class_intro.asp), [prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)

**Assessment**: Homework review








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

- Haverbeke: [Ch8 Bugs and Errors](https://eloquentjavascript.net/08_error.html) (128-142), [Ch10 Modules](https://eloquentjavascript.net/10_modules.html) (167-178)
- Codecademy: [10-1 Browser Compatibility and Transpilation](https://www.codecademy.com/learn/introduction-to-javascript) (1-11), [11-1 Intermediate Javascript Modules](https://www.codecademy.com/learn/introduction-to-javascript) (1-15)

#### Review

- Codecademy Cheatsheet(s) [transpilation](reference-sheets/JS-10-Compatibility.pdf), [modules](reference-sheets/JS-11-Modules.pdf)
- w3schools [use strict](https://www.w3schools.com/js/js_strict.asp), [debugging](https://www.w3schools.com/js/js_debugging.asp)

**Assessment**: Homework review








<!---
comments
-->

## Asynchronous Javascript Part.1

**Overview**: How to deal with events and latency using callbacks, promises, and async/await

```js
// callback example
function logTheAnswer(answer) {
	console.log("The answer is " + answer);
}
function calc(n1, n2, callback) {
	// passed function is invoked at function end
	callback(n1 + n2);
}
// pass the function as a callback
calc(5, 5, logTheAnswer);

// promise example
function waitForPromise(param) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(param);
		}, 2000);
	});
}
async function test() {
	// binding to
	let str = "";
	str += await waitForPromise("🤡");
	console.log(str);
	str += await waitForPromise(" lurks");
	console.log(str);
	str += await waitForPromise(" in the shadows");
	console.log(str);
}
test();
```
<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- Haverbeke: [Ch11 Asynchronous Programming](https://eloquentjavascript.net/11_async.html) (180-201)
- Codecademy: [12-1 Javascript Promises](https://www.codecademy.com/learn/introduction-to-javascript) (1-11), [13-1 Async-Await](https://www.codecademy.com/learn/introduction-to-javascript) (1-9)
- Exercises: Ch11 [Tracking the scalpel](https://eloquentjavascript.net/11_async.html#i_UvyahfUnfl), [Building Promise.all](https://eloquentjavascript.net/11_async.html#i_Ug+Dv9Mmsw)

#### Review

- Codecademy Cheatsheet(s) [promises](reference-sheets/JS-12-Promises.pdf), [Async-Await](reference-sheets/JS-13-Async-Await.pdf)
- w3schools [callbacks](https://www.w3schools.com/js/js_callback.asp), [asynchronous](https://www.w3schools.com/js/js_asynchronous.asp), [promises](https://www.w3schools.com/js/js_promise.asp), [async-await](https://www.w3schools.com/js/js_async.asp)
- See also: [Modern Asynchronous JavaScript with Async and Await](https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await)

**Assessment**: Homework review













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

- Codecademy: [14-1 Requests I](https://www.codecademy.com/learn/introduction-to-javascript) (1-10), [14-2 Requests II](https://www.codecademy.com/learn/introduction-to-javascript) (1-17)

#### Review

- Codecademy Cheatsheet(s) [Requests](reference-sheets/JS-14-Requests.pdf)
- w3schools [AJAX](https://www.w3schools.com/jquery/jquery_ajax_intro.asp), [jquery get/post](https://www.w3schools.com/jquery/jquery_ajax_get_post.asp), [fetch](https://www.w3schools.com/js/js_api_fetch.asp)

**Assessment**: Homework review













# Node Express Part.1
Introduction to Node and Express




<!---
comments
-->

## Node Introduction

**Overview**: How to ...

```bash
# get the node version
node -v
### install nodemon globally
npm install -g nodemon
### make a new directory and move to it
mkdir sample-node-express-site && cd sample-node-express-site
### create a node project
npm init
### initialize git
git init
### install express
npm install express
```
<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch1 Introducing Express (1-9)
	- Ch2 Getting Started with Node (11-20)
	- Ch3 Saving Time with Express (21-30)

**Assessment**: Homework review








<!---
comments
-->

## Node and Express

**Overview**: How to ...

```js

```
<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch1 Introducing Express (1-9)
	- Ch2 Getting Started with Node (11-20)
	- Ch3 Saving Time with Express (21-30)

**Assessment**: Homework review









<!---
comments
-->

## Node Testing

**Overview**: How to ... MVC, testing, linting, debugging

```js
// code example
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch4 Tidying Up (31–39)
	- Ch5 Quality Assurance (41–58)

**Assessment**: Homework review








<!---
comments
-->

## Requests & Templating

**Overview**: How to ... Express request, response, Handlebars, MVC

```js
// code example
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch6 Request and Response (59-72)
	- Ch7 Templating with Handlebars (73-88)

**Assessment**: Homework review






<!---
comments
-->

## Forms & Sessions

**Overview**: How to ... Express web forms, sessions

```js
// code example
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch8 Form Handling (89-100)
	- Ch9 Cookies and Sessions (103-112)

**Assessment**: Homework review







<!---
comments
-->

## Middleware & Production

**Overview**: How to use middleware, send email, PM2

```js
// code example
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

**Assessment**: Homework review






# Node Express Part.2
Using Node, Express for server-side, desktop, and mobile application development







<!---
comments
-->

## Express and databases

**Overview**: How to ...

```js
// code example
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch13 Persistence (147-172)

**Assessment**: Homework review






<!---
comments
-->

## Express routes, APIs, JSON

**Overview**: How to ...

```js
// code example
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

**Assessment**: Homework review




<!---
comments
-->

## Express SPAs, static content

**Overview**: How to ...

```js
// code example
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

**Assessment**: Homework review





<!---
comments
-->

## Express security, APIs

**Overview**: How to ...

```js
// code example
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

**Assessment**: Homework review





<!---
comments
-->

## Express debugging, production

**Overview**: How to ...

```js
// code example
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

**Assessment**: Homework review







# Other Javascript Frameworks and Libraries
Javascript / Node for data visualization, mapping, browser extensions, desktop and mobile apps, and more...



### Visualization

- https://www.chartjs.org/
- https://d3js.org/


### Animation

- https://animejs.com/
- https://threejs.org/
- https://www.createjs.com/tweenjs
- https://blog.bitsrc.io/11-javascript-animation-libraries-for-2018-9d7ac93a2c59


### Mapping

- https://leafletjs.com/
- https://openlayers.org/
- https://www.mapbox.com/
- https://developers.google.com/maps/documentation
- https://developers.arcgis.com/


### Browser Extensions

- https://developer.chrome.com/docs/extensions/mv2/getstarted/
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension


### UI Frameworks

- https://vuejs.org/
- https://reactjs.org/
- https://angular.io/


### Desktop Applications

- https://www.electronjs.org/
- https://techbeacon.com/app-dev-testing/how-use-nodejs-build-premise-desktop-apps
- https://livebook.manning.com/book/cross-platform-desktop-applications/part-1/


### Mobile Applications

- https://ionicframework.com/
- https://code.janeasystems.com/nodejs-mobile
- https://rapidapi.com/blog/how-to-create-a-mobile-app-with-nodejs/


### More Possibilities

- https://getflywheel.com/layout/best-javascript-libraries-frameworks-2020/
- https://en.wikipedia.org/wiki/List_of_JavaScript_libraries
