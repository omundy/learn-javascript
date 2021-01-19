
![js logo](assets/img/logo-javascript-150w.png) ![js logo](assets/img/logo-node-ltgreen-150w.png)

# Javascript

A linear progression through full stack Javascript, with tutorials, exercises, and examples demonstrating uses like:

- Interacting with the DOM, HTML, and CSS inside web browsers
- Using libraries like jQuery, Anime.js, etc.
- Running Javascript, Node.js, and NPM on the command line
- Building a Node/Express website and API server
- Creating browser extensions with Javascript

This path to Javascript unites many materials (lectures, demos, milestones, exercises, etc.) with corresponding homework (book chapters, practice, exercises, etc.) to support my web courses, DIG 245 Critical Web Design and DIG 345 Radical Software in [Digital Studies](https://www.davidson.edu/academic-departments/digital-studies) at Davidson College.

Anyone is welcome to fork the repo and use this course structure. You can view the [github.io](https://omundy.github.io/learn-javascript/) version and execute examples there. You will need the following books, prior experience with HTML and CSS, and accounts with Github, Codecademy, and Codepen.io:

- Marijn Haverbeke [Eloquent JavaScript](https://eloquentjavascript.net/) 3rd edition (2018) [solutions](https://github.com/marijnh/Eloquent-JavaScript/tree/master/code/solutions)
- Ethan Brown [Web Development with Node & Express](https://www.oreilly.com/library/view/web-development-with/9781492053507/) 2nd Edition (2019)









## Structure

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





<h1 align="center">Javascript Part.1</h1>
<p align="center">Introduction to the language</p>



## 0-Introduction

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






## 1-Values, Types, Operators

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

**Assessment**: Quiz 1












## 2-Control Flow, Functions, Loops

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

**Assessment**: Quiz 2; Homework review









## 3-Data Structures

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
- Exercises: [The sum of a range](https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/), [Reversing an array](https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5), [A list](https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M), [Deep comparison](https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC)

**Assessment**: Quiz 3; Homework review









## 4-jQuery and The DOM

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
- Exercises:
	- Ch14 [Build a table](https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe), [Elements by tag name](https://eloquentjavascript.net/14_dom.html#i_VSftnyRTsV), [The cat’s hat](https://eloquentjavascript.net/14_dom.html#i_b/LAqZUqyo)


**Assessment**: Quiz 4; Homework review









## 5-Forms & Events

**Overview**: How to use forms with Javascript and jQuery


- Lecture: [Forms & Events](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga4ca8d22b7_0_115)
- Demo: [The Lottery v.2](demos/games/the-lottery/) - responding to events, [The Lottery v.3](demos/games/the-lottery/) - displaying content in the browser
- Exercise: Add a way to spend more money in the lottery game


#### Homework

- Haverbeke: [Ch15 Handling Events](https://eloquentjavascript.net/15_event.html) (243-259), [Ch18 HTTP and Forms](https://eloquentjavascript.net/18_http.html) (308-328)
- Codecademy: none
- Exercises:
	- Ch15 [Balloon](https://eloquentjavascript.net/15_event.html#i_ZPJB9UFdQA), [Mouse trail](https://eloquentjavascript.net/15_event.html#i_NOgRH0Y9st), [Tabs](https://eloquentjavascript.net/15_event.html#i_Kk1WKx2anJ)
	- Ch18 [Content negotiation](https://eloquentjavascript.net/18_http.html#i_uaWwL8WGXf), [A JavaScript workbench](https://eloquentjavascript.net/18_http.html#i_wTXvIH5Wds), [Conway’s Game of Life](https://eloquentjavascript.net/18_http.html#i_XyKQVmCbTN)



**Assessment**: Quiz 5; Homework review











<h1 align="center">Javascript Part.2</h1>
<p align="center">Advanced topics</p>




## 6-Higher-order functions

**Overview**: How to ...

- Lecture:
- Demo:
- Exercise:


#### Homework

- Haverbeke: [Ch5 Higher-order Functions](https://eloquentjavascript.net/05_higher_order.html) (82-95)
- Codecademy: [7-1 Higher-Order Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-4), [7-2 Iterators](https://www.codecademy.com/learn/introduction-to-javascript) (1-9)



- Review
	- Codecademy [iterators](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators)
	- w3schools









## 7-Object Oriented Programming

**Overview**: How to ...

- Lecture:
- Demo:
- Exercise:


- Slides introducing content for next week, using...
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-classes
	- Lecture: [Topics: SPAs](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga8da2c3fcb_0_76)











```js
xxx
```

#### Homework

- Haverbeke
	- [Ch6 The Secret Life of Objects](https://eloquentjavascript.net/06_object.html) (97-115)
	- [Ch7 Project: A Robot](https://eloquentjavascript.net/07_robot.html) (117-126)
	- [Ch8 Bugs and Errors](https://eloquentjavascript.net/08_error.html) (128-142)
- Codecademy
	- 8-1 Objects (1-10)
	- 8-2 Advanced Objects (1-11)
	- 9-1 Classes (1-12)
- Exercises:
	-

#### In class

- Quiz 4
- Homework review
- Slides introducing content for next week, using...
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-transpilation
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/intermediate-javascript-modules
- Demo












## 8-Regular Expressions & Modules

```js
xxx
```

#### Homework

- Haverbeke
	- [Ch9 Regular Expressions](https://eloquentjavascript.net/09_regexp.html) (143-165)
	- [Ch10 Modules](https://eloquentjavascript.net/10_modules.html) (167-178)
- Codecademy
	- 10-1 Browser Compatibility and Transpilation (1-11)
	- 11-1 Intermediate Javascript Modules (1-15)
- Exercises:
	-

#### In class

- Quiz 5
- Homework review
- Slides introducing content for next week, using...
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/javascript-promises
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/asynch-js
- Demo










## 6-Asynchronous Programming

```js
xxx
```

#### Homework

- Haverbeke
	- [Ch11 Asynchronous Programming](https://eloquentjavascript.net/11_async.html) (180-201)
	- [Ch12 Project: A Programming Language](https://eloquentjavascript.net/12_language.html) (202-214)
- Codecademy
	- 12-1 Javascript Promises (1-11)
	- 13-1 Async-Await (1-9)
- Exercises:
	-

#### In class

- Quiz 6
- Homework review
- Slides introducing content for next week, using...
	- APIs
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/intermediate-javascript-requests
- Demo








## xx

```js

```

#### Homework

- Haverbeke

- Codecademy
	- Requests I (1-10)
	- Requests II (1-17)
- Exercises:
	-


#### In class

- Quiz 7
- Homework review
- Slides introducing content for next week, using...
- Demo













<h1 align="center">Node / Express</h1>
<p align="center">Using Node, Express for server-side, desktop, and mobile development</p>







## 9-Node Introduction

```bash
# create a node project
npm init
# get the node version
node -v
```

#### Homework

- Haverbeke
	- [Ch20 Node.js](https://eloquentjavascript.net/20_node.html) (350-367)
	- [Ch21 Project: Skill-Sharing Website](https://eloquentjavascript.net/21_skillsharing.html) (369-387)
- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch1 Introducing Express (1-9)
	- Ch2 Getting Started with Node (10-20)
	- Ch3 Saving Time with Express (21-30)

#### In class

- Quiz xxx
- Homework review
- Slides introducing content for next week, using...
- Demo







## 10-Node Testing

```js
xxx
```

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch4 Tidying Up (31–40)
	- Ch5 Quality Assurance (51–58)

#### In class

- Quiz xxx
- Homework review
- Slides introducing content for next week, using...
- Demo







## 11-Requests & Templating

```js
xxx
```

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch6 Request and Response (59-72)
	- Ch7 Templating with Handlebars (73-88)

#### In class

- Quiz xxx
- Homework review
- Slides introducing content for next week, using...
- Demo






## 12-Forms & Sessions

```js
xxx
```

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch8 Form Handling (89-101)
	- Ch9 Cookies and Sessions (102-113)

#### In class

- Quiz xxx
- Homework review
- Slides introducing content for next week, using...
- Demo








## 13-Middleware & Production

```js
xxx
```

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch10 Middleware (114-120)
	- Ch11 Sending Email (121-131)
	- Ch12 Production Concerns (133-145)

#### In class

- Quiz xxx
- Homework review
- Slides introducing content for next week, using...
- Demo







- Ch13 Persistence (147-172)



- Ch14 Routing (173-184)
- Ch15 REST APIs and JSON (185-192)



- Ch16 Single-Page Applications (193-214)
- Ch17 Static Content (215-222)



- Ch18 Security (223-248)
- Ch19 Third Party APIs (249-265)



- Ch20 Debugging (265-275)
- Ch21 Going Live (276-289)
- Ch22 Maintenance (291-300)





## xxx

```js
xxx
```

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	-

#### In class

- Quiz xxx
- Homework review
- Slides introducing content for next week, using...
- Demo
