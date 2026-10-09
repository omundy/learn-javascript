<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Functions & Events

How to reuse code, protect variables, and organize code

<span class="slides-small"><a href="slides.html">slides</a> | <a href="functions.md">md</a></span>

<!--
Presentation comments ...
-->







---

## Introduction

Review the following sections and perform the activities on your own or with your group.

Perform the task(s) when you see this 👉  emoji

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

- Explain the benefits of using functions
- Compare global and local scope
- Create a function and call it from javascript code

</details>

<details>
<summary>Homework</summary>

- [Codecademy: JS 3-1 Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-7)
- [Codecademy: JS 4-1 Scope](https://www.codecademy.com/learn/introduction-to-javascript) (1-4)

</details>









---

## About Functions

<div class="twocolumn">
<div class="col">

- Functions are a way to organize and reuse blocks of code.
- Javascript contains several built-in functions that make it easy to perform common tasks.* 
- To use a function, "call" it with the name and two parentheses `()`

<div class="caption slides-small">
*Functions are also called "methods", especially in OOP (Object Oriented Programming).
</div>

</div>
<div class="col">

```js
// these built-in functions ...
alert("hello world!");

// all require parameters ...
console.log(123); // -> 123

// to do things 
Math.ceil(1.3); // -> 2
```

<div class="caption slides-small">
The task a function performs can be customized using one or more parameters placed between the parentheses.
</div>

</div>
</div>








---

## Create a Function

Use the <code>function</code> keyword, followed by two parentheses.  The open and closing curly braces contain the code that is executed when the function is called.

```js
function hello(){
	console.log("hello back!");
}
```

👉 Paste the above into the console, press return, and then run it with... 

```js
hello()
```




---

## Use Parameters and a Return Value

Declare a new <code>function</code> with **parameters** to customize its task. Use **return** to send data back to the code where it was called.

<img src="../../assets/img/06-16-JS-function-anatomy.png" width="80%">

<div class="caption slides-small">
👉 Paste into the console <code>function square() { return num * num }</code>, then call it with <code>square(2)</code> or <code>square(12)</code>
</div>




---

## Code Reuse

Writing the same code over and over is not only inefficient and boring, it also makes it difficult to detect and fix errors. 

```js
let hex = "0123456789abcdef"
document.body.style.backgroundColor = "#" + 
	// create a random number between 0-15 to get a hexadecimal character
    hex[Math.floor(Math.random() * hex.length)] + 
    hex[Math.floor(Math.random() * hex.length)] +
    hex[Math.floor(Math.random() * hex.length)] +
    hex[Math.floor(Math.random() * hex.length)] +
    hex[Math.floor(Math.random() * hex.length)] +
    hex[Math.floor(Math.random() * hex.length)]
```






---

## Custom Functions

If you find yourself typing the same instructions, consider using a **custom function** to make it easier to write and manage the code. 
 

```js
let hex = "0123456789abcdef"
function r(){
	return hex[Math.floor(Math.random() * hex.length)]
}
document.body.style.backgroundColor = "#" +r() +r() +r() +r() +r() +r();
```

<div class="caption slides-small">
In the updated example the repeated code is "wrapped" with a function which "returns" the value of the expression back to the location where it was called. The changes reflect the <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank">D.R.Y.</a> ("Don't Repeat Yourself") principle in action.
</div>

 







---

## Global Scope

The location in your code where you declare a variable determines its **scope**, or how it can be accessed by other parts of your program. With **global scope**, variables can be accessed from anywhere.

```js
let foo = "hello";
function updateFoo() {
	foo = "goodbye"; // ✅ we can access a global variable
}
updateFoo();
console.log("foo =", foo); // -> "goodbye"
```

<div class="slides-small">
	Example: <a href="demos/functions-scope.html" target="_blank">demos/functions-scope.html</a>
</div>



---

## Local Scope

Alternately, with **local scope**, variables are accessible only within the statement block (and nested blocks) where they were declared.

```js
function updateBar() {
	let bar = 123; // variable declared with local scope
}
updateBar();
// ❌ bar is local because was defined (scoped) in a block
console.log("bar =", bar);
// -> "Uncaught ReferenceError: bar is not defined"
```

<div class="slides-small">
	Example: <a href="demos/functions-scope.html" target="_blank">demos/functions-scope.html</a>
</div>






---

## Function Expressions

So far we've used <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions" target="_blank">function declarations</a>. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" target="_blank">function expression</a> is also common. 

```js
const getCurrentHour = () => {
    let today = new Date();
    return today.getHours();  
}
console.log(getCurrentHour());
```

The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank">arrow function</a> is succinct when the function body can fit on a single line.

```js
const getCurrentHour = () => new Date().getHours(); 
console.log(getCurrentHour());
```


<div class="slides-small">
	<a href="https://codepen.io/owenmundy/pen/RwYzMEp?editors=1011" target="_blank">rollTheDice() function expression example</a>
</div>




---

## Anonymous Functions


<div class="twocolumn1x2">
<div class="col">

- A function expression without a name is **anonymous**.
- Often used as callbacks event listeners.
- Callbacks can be stored as function expressions or plain anonymous functions

</div>
<div class="col">

```js
let button = document.querySelector(".btn");

// #1 - anonymous function as click handler
button.addEventListener("click", function() {
	console.log("click! 🎉")
});

// #2 - named function as callback
var myFunc = function() {
	console.log("click! 🎉")
}
button.addEventListener("click", myFunc);
```

<div class="slides-small">
	Examples #1 and #2 do the same thing.
</div>

</div>
</div>











---

## Next steps

1. Explore [More Concepts](#more-concepts) at the end
1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the next lesson: **Data Structures** [slides](../data-structures/slides.html) | [md](../data-structures/data-structures.md)



---

## Exercises

👉 **Try it out**

1. [Lottery v.2](https://omundy.github.io/learn-javascript/topics/games/the-lottery/) - Show results of the game in HTML
1. [Gradebook](../../topics/single-page-apps/grade-book/README.md) - Code a gradebook app using conditions, functions, and jquery.
1. Revisit [this lamp demo](../../topics/single-page-apps/javascript-lamp/index.html) to explore how it uses functions


---

## References

- Haverbeke [Ch3 Functions](https://eloquentjavascript.net/03_functions.html) (39-55)
- Codecademy Cheatsheet(s) [functions](reference-sheets/js-03-functions.pdf), [scope](reference-sheets/js-04-scope.pdf)
- w3schools [functions](https://www.w3schools.com/js/js_functions.asp), [arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)
- [JavaScript Functions vs Methods (and other helpful tips)](https://medium.com/predict/javascript-functions-vs-methods-and-other-helpful-tips-e58a621b1d27)





---

## More Concepts

Continue for more related concepts.







---

## IIFE


<div class="twocolumn">
<div class="col">

- Variables declared in anonymous functions won't conflict with other code used in your project.
- An IIFE [(Immediately Invoked Function Expressions)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) will run as soon as your code runs and helps to [limit global variables](https://developer.mozilla.org/en-US/docs/Glossary/IIFE#avoid_polluting_the_global_namespace) and conflicts.

</div>
<div class="col">

```js
(function(){
	// an IIFE runs immediately but
	// the variables declared here
	// do not have global scope
})();
```

</div>
</div>





---

## Side Effects

- [**Side effects**](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) are statements that evaluate an expression and produce some other effect instead of returning a value.

```js
alert(1 + 1); // -> Opens a popup window
console.log(1 < 2); // -> logs to the console
```

<div class="caption slides-small">
	<a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" target="_blank">What is Functional Programming?</a>
</div>





---

## Anonymous Functions (jQuery example)

NOTE: <a href="https://youmightnotneedjquery.com)" target="_blank">youmightnotneedjquery.com</a>

<div class="twocolumn">
<div class="col">

```js
$("button").click(function() {
	// jquery click() adds listener
    // anonymouse function used as handler
});
```

</div>
<div class="col">


```js
$("button").click(myCallback);

var myCallback = function() {
	// this is the same as the pure JS example
}
```

</div>
</div>

