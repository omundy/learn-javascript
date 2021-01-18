
![js logo](assets/img/logo-javascript-150w.png) ![js logo](assets/img/logo-node-ltgreen-150w.png)

# Javascript

A linear progression through full stack Javascript, with tutorials, exercises, and examples demonstrating uses like:

- Interacting with the DOM, HTML, and CSS inside web browsers
- Using libraries like jQuery, Anime.js, etc.
- Running Javascript, Node.js, and NPM on the command line
- Building a Node/Express website and API server
- Creating browser extensions with Javascript

This path to Javascript unites my materials (lectures, demos, milestones, exercises, etc.) with the corresponding homework (book chapters, practice, exercises, etc.) to support my web courses, DIG 245 Critical Web Design and DIG 345 Radical Software respectively, in [Digital Studies](https://www.davidson.edu/academic-departments/digital-studies) at Davidson College.

Anyone is welcome to fork the repo and run the demos, or view the [github.io](https://omundy.github.io/learn-javascript/) version and execute them there. You will need the following books, prior experience with HTML and CSS, and accounts with Github, Codecademy, and Codepen.io:

- Marijn Haverbeke [Eloquent JavaScript](https://eloquentjavascript.net/) 3rd edition (2018) [solutions](https://github.com/marijnh/Eloquent-JavaScript/tree/master/code/solutions)
- Ethan Brown [Web Development with Node & Express](https://www.oreilly.com/library/view/web-development-with/9781492053507/) 2nd Edition (2019)









## Structure

Each section or class period is structured following the [Hunter Lesson Plan](https://thesecondprinciple.com/teaching-essentials/models-of-teaching/madeline-hunter-lesson-plan-model/) with approximate time estimates:
```
- Before class ("Homework" items to be completed prior to each class)
	- 2 hours - Read book chapters
	- 1 hour - Do Codecademy practice
	- 1 hour - Independent practice - Do exercises in book
	- 30 min - Review lecture from class, reference sheet, w3schools
- In class (the class period, online or f2f)
	- 20 min - Evaluation - Quiz on, and then review of, homework material
	- 20 min - Introduction - 10-20 min Lecture / Demo on key points for *next week's* content
	- 20-40 min - Guided practice - Start next homework
```





<h1 align="center">Javascript Basics</h1>

## 0-Introduction

**Summary** - What, where, and how to run Javascript; Introduction to expressions, statements, and operators

```js
// You can execute this code right in the Javascript console
console.log("Hello world!");
console.log(1 + 1);
console.log(1 + "1");
console.log(typeof "1");
```

#### In class

- Lecture: [Javascript Introduction](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit?usp=sharing) and [Data & Variables](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga0a6e47c90_0_44) (introduction to next week's work)
- Demo: Run Javascript expressions in the Dev Console and in a Code Playground
- Exercise: [Test expressions in the Dev Console](exercises/00-expressions.md). Start next week's homework...






## 1-Values, Types, Operators

**Summary** - How to store and compare values and data types

```js
// bind a string
let question = "Can we celebrate yet?";
// store an instance of the date object
let today = new Date();
// concatenate the string binding with the return value from an expression
console.log(question + " " + (today.getFullYear() > 2020))
```

#### Before class

- Haverbeke
	- [Introduction](https://eloquentjavascript.net/00_intro.html) (1-8)
	- [Ch1 Values, Types, and Operators](https://eloquentjavascript.net/01_values.html) (10-20)
- [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
	- 1-1 Introduction to Javascript (1–8)
	- 1-2 Variables (1–6)
- Review:
	- Codecademy Key Concepts [Javascript introduction](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/)
	- w3schools [intro](https://www.w3schools.com/js/js_intro.asp), [install](https://www.w3schools.com/js/js_whereto.asp), [output](https://www.w3schools.com/js/js_output.asp), [statements](https://www.w3schools.com/js/js_statements.asp), [syntax](https://www.w3schools.com/js/js_syntax.asp), [comments](https://www.w3schools.com/js/js_comments.asp), [variables](https://www.w3schools.com/js/js_variables.asp), [data types](https://www.w3schools.com/js/js_datatypes.asp), [operators](https://www.w3schools.com/js/js_operators.asp), [Date](https://www.w3schools.com/jsref/jsref_obj_date.asp)


#### In class

- Quiz 1
- Lecture: [Control flow](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.g53c97a02bb_0_99)
- Demo: Make your first game! [The Lottery v.1](demos/games/the-lottery/)
- Exercise: [Gradebook Conditions Exercise](exercises/02-grade-book.md) Start next week's homework...










## 2-Control Flow, Functions

**Summary** - How to use bindings, conditionals, loops, and functions to let your code make decisions

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

#### Before class

- Haverbeke
	- [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-37)
	- [Ch3 Functions](https://eloquentjavascript.net/03_functions.html) (39-55)
- [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
	- 2-1 Conditional Statements (1–8)
	- 3-1 Functions (1-7)
	- 4-1 Scope (1-4)
- Exercises
	- Ch2 [Looping a triangle](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [FizzBuzz](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [Chessboard](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe)
	- Ch3 [Minimum](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Recursion](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Bean Counting](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do)
- Review
	- Codecademy Key Concepts [control flow](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow), [functions](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions), and [scope](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-scope)
	- w3schools [operators](https://www.w3schools.com/js/js_operators.asp), [assignment](https://www.w3schools.com/js/js_assignment.asp), [arithmetic](https://www.w3schools.com/js/js_arithmetic.asp), [comparisons](https://www.w3schools.com/js/js_comparisons.asp), [conditions](https://www.w3schools.com/js/js_if_else.asp), [functions](https://www.w3schools.com/js/js_functions.asp)


#### In class

- Quiz 2
- Review homework
- Lecture: [Arrays and Loops](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.g57d35b35d3_0_0)
- Demo
- Start next week's homework...








## 3-Data Structures, Loops

```js
let myArray = [10,34,101];
let myObject = {
	"color1": "blue",
	"color2": "gold"
};
```

#### Before class

- Haverbeke
	- [Ch4 Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html) (57-79)
	- [Ch5 Higher-order Functions](https://eloquentjavascript.net/05_higher_order.html) (82-95)
- [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
	- 5-1 Arrays (1–7)
	- 6-1 Loops (1–7)
	- 7-1 Higher-Order Functions (1-4)
	- 7-2 Iterators (1-9)
- Exercises:
	- Ch4:
- Review
	- Codecademy Key Concepts [arrays](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays), [loops](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops), and [iterators](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators)
	- w3schools [arrays](https://www.w3schools.com/js/js_arrays.asp), [objects](https://www.w3schools.com/js/js_objects.asp), [json](https://www.w3schools.com/js/js_json_intro.asp), [json syntax](https://www.w3schools.com/js/js_json_syntax.asp), [for loop](https://www.w3schools.com/js/js_loop_for.asp), [break](https://www.w3schools.com/js/js_break.asp)

#### In class

- Quiz 3
- Review homework
- Slides introducing content for next week, using...
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-classes
	- Lecture: [Topics: SPAs](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga8da2c3fcb_0_76)
- Demo









- jQuery [Intro](https://www.w3schools.com/jquery/jquery_intro.asp), [Get Started](https://www.w3schools.com/jquery/jquery_get_started.asp), [syntax](https://www.w3schools.com/jquery/jquery_syntax.asp), [Selectors](https://www.w3schools.com/jquery/jquery_selectors.asp), [events](https://www.w3schools.com/jquery/jquery_events.asp)
- w3schools [events](https://www.w3schools.com/js/js_events.asp), [DOM](https://www.w3schools.com/js/js_htmldom.asp), [methods](https://www.w3schools.com/js/js_htmldom_methods.asp), [html](https://www.w3schools.com/js/js_htmldom_html.asp)
- Lecture: [DOM, jQuery, Arrays / loops](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit?usp=sharing)



## 4-Object Oriented Programming

```js
xxx
```

#### Before class

- Haverbeke
	- [Ch6 The Secret Life of Objects](https://eloquentjavascript.net/06_object.html) (97-115)
	- [Ch7 Project: A Robot](https://eloquentjavascript.net/07_robot.html) (117-126)
	- [Ch8 Bugs and Errors](https://eloquentjavascript.net/08_error.html) (128-142)
- [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
	- 8-1 Objects (1-10)
	- 8-2 Advanced Objects (1-11)
	- 9-1 Classes (1-12)
- Exercises:
	-

#### In class

- Quiz 4
- Review homework
- Slides introducing content for next week, using...
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-transpilation
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/intermediate-javascript-modules
- Demo





<h1 align="center">Advanced Javascript</h1>



## 5-Regular Expressions & Modules

```js
xxx
```

#### Before class

- Haverbeke
	- [Ch9 Regular Expressions](https://eloquentjavascript.net/09_regexp.html) (143-165)
	- [Ch10 Modules](https://eloquentjavascript.net/10_modules.html) (167-178)
- [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
	- 10-1 Browser Compatibility and Transpilation (1-11)
	- 11-1 Intermediate Javascript Modules (1-15)
- Exercises:
	-

#### In class

- Quiz 5
- Review homework
- Slides introducing content for next week, using...
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/javascript-promises
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/asynch-js
- Demo










## 6-Asynchronous Programming

```js
xxx
```

#### Before class

- Haverbeke
	- [Ch11 Asynchronous Programming](https://eloquentjavascript.net/11_async.html) (180-201)
	- [Ch12 Project: A Programming Language](https://eloquentjavascript.net/12_language.html) (202-214)
- [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
	- 12-1 Javascript Promises (1-11)
	- 13-1 Async-Await (1-9)
- Exercises:
	-

#### In class

- Quiz 6
- Review homework
- Slides introducing content for next week, using...
	- APIs
	- https://www.codecademy.com/learn/introduction-to-javascript/modules/intermediate-javascript-requests
- Demo








## 7-The DOM & Events

```js
window.alert(document.URL);
```

#### Before class

- Haverbeke
	- [Ch13 JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html) (216-222)
	- [Ch14 The Document Object Model](https://eloquentjavascript.net/14_dom.html) (224-241)
	- [Ch15 Handling Events](https://eloquentjavascript.net/15_event.html) (243-259)
- [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
	- Requests I (1-10)
	- Requests II (1-17)
- Exercises:
	-


#### In class

- Quiz 7
- Review homework
- Slides introducing content for next week, using...
- Demo









## 8-HTML Canvas

```js
xxx
```

#### Before class

- Haverbeke
	- [Ch16 Project: A Platform Game](https://eloquentjavascript.net/16_game.html) (261-282)
	- [Ch17 Drawing on Canvas](https://eloquentjavascript.net/17_canvas.html) (284-306)
	- [Ch18 HTTP and Forms](https://eloquentjavascript.net/18_http.html) (308-328)
	- [Ch19 Project: A Pixel Art Editor](https://eloquentjavascript.net/19_paint.html) (330-348)

#### In class

- Quiz xxx
- Review homework
- Slides introducing content for next week, using...
	- https://www.w3schools.com/html/html5_canvas.asp
- Demo






<h1 align="center">Node / Express</h1>



## 9-Node Introduction

```bash
# create a node project
npm init
# get the node version
node -v
```

#### Before class

- Haverbeke
	- [Ch20 Node.js](https://eloquentjavascript.net/20_node.html) (350-367)
	- [Ch21 Project: Skill-Sharing Website](https://eloquentjavascript.net/21_skillsharing.html) (369-387)
- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch1 Introducing Express (1-9)
	- Ch2 Getting Started with Node (10-20)
	- Ch3 Saving Time with Express (21-30)

#### In class

- Quiz xxx
- Review homework
- Slides introducing content for next week, using...
- Demo







## 10-Node Testing

```js
xxx
```

#### Before class

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch4 Tidying Up (31–40)
	- Ch5 Quality Assurance (51–58)

#### In class

- Quiz xxx
- Review homework
- Slides introducing content for next week, using...
- Demo







## 11-Requests & Templating

```js
xxx
```

#### Before class

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch6 Request and Response (59-72)
	- Ch7 Templating with Handlebars (73-88)

#### In class

- Quiz xxx
- Review homework
- Slides introducing content for next week, using...
- Demo






## 12-Forms & Sessions

```js
xxx
```

#### Before class

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch8 Form Handling (89-101)
	- Ch9 Cookies and Sessions (102-113)

#### In class

- Quiz xxx
- Review homework
- Slides introducing content for next week, using...
- Demo








## 13-Middleware & Production

```js
xxx
```

#### Before class

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch10 Middleware (114-120)
	- Ch11 Sending Email (121-131)
	- Ch12 Production Concerns (133-145)

#### In class

- Quiz xxx
- Review homework
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

#### Before class

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	-

#### In class

- Quiz xxx
- Review homework
- Slides introducing content for next week, using...
- Demo
