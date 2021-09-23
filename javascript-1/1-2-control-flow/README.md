
← [Variables](../1-1-variables/variables.md) | [Functions & Scope](../1-3-functions-scope/functions-scope.md) →

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# 1-1 Control Flow

Comparison and logical operators, conditional statements


## Contents

1. [Introduction](#introduction)

1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references)


## Introduction

Review the following sections and perform the activities on your own or with your group.

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

- Demonstrate how to install Javascript in a web page.
- Explain why and how to use comments in Javascript.
- Use Javascript to create and use variables.
- List common syntax issues when programming Javascript.

</details>

<details>
<summary>Homework</summary>

- [Codecademy: JS 2-1 Conditional Statements ](https://www.codecademy.com/learn/introduction-to-javascript) (1–8)
- [Codecademy: HTML 3-1 Forms](https://www.codecademy.com/learn/learn-html) (1-14)
- [Codecademy: HTML 3-2 Form Validation](https://www.codecademy.com/learn/learn-html) (1-6)
- Quiz 7 - JS Control Flow

</details>











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









## Web Forms


<form action="#">

  <input type="text" id="hi">
  <input type="submit">
</form>

document.addEventListener("submit", function(e){
	console.log(document.getElementById("hi").value);
  e.preventDefault();
})

https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault



The data, conditions, and events of Javascript can be seen at work in [this lamp demo](https://omundy.github.io/learn-javascript/1-0-introduction/javascript-lamp/index.html)





 [output](https://www.w3schools.com/js/js_output.asp),
