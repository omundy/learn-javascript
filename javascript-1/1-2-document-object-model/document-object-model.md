
← [Variables](../1-1-variables/variables.md) | [Functions & Scope](../1-3-functions-scope/functions-scope.md) →

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# 1-2 Document Object Model (DOM)

Comparison and logical operators, conditional statements


## Contents

1. [Introduction](#introduction)
1. [Selecting HTML elements](#selecting-html-elements) `5 min`


1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references)


## Introduction

Review the following sections and perform the activities on your own or with your group.

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

- Demonstrate how to
- Explain
- Use Javascript to
- List

</details>

<details>
<summary>Homework</summary>



</details>



## DOM



## Selecting HTML elements



## JQuery for selection



## Forms


##





## Selecting HTML elements

In order for Javascript to change values on a web page, we have to use it to **select** elements. There are several ways to do this.


Type this into the Console and hit return.

```js
window
```

The window is your key to accessing the DOM (Document Object Model) with Javascript. You can set or get any value stored in the page, or use any method (function) that is built in. Try some of these:














## Web Forms


```

<form action="#">

  <input type="text" id="hi">
  <input type="submit">
</form>

```

document.addEventListener("submit", function(e){
	console.log(document.getElementById("hi").value);
  e.preventDefault();
})

https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault










## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../README.md#javascript-part1).




## References

- Haverbeke [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-26)
- Codecademy Cheatsheet(s) [Conditionals](../../reference-sheets/js-02-conditionals.pdf)
- W3schools [operators](https://www.w3schools.com/js/js_operators.asp), [assignment](https://www.w3schools.com/js/js_assignment.asp), [arithmetic](https://www.w3schools.com/js/js_arithmetic.asp), [comparisons](https://www.w3schools.com/js/js_comparisons.asp), [conditions](https://www.w3schools.com/js/js_if_else.asp), [output](https://www.w3schools.com/js/js_output.asp)
