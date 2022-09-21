<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Functions

Reusing code, protecting variables, callback functions

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

-

</details>

<details>
<summary>Homework</summary>

- [Codecademy: JS 3-1 Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-7)
- [Codecademy: JS 4-1 Scope](https://www.codecademy.com/learn/introduction-to-javascript) (1-4)

</details>









---

## About Functions

- A function is a reusable block of instructions.
- Functions can receive values (**parameters**) to change their **return values**.

<img src="../../assets/img/javascript-diagram-function-io.png" width="100%">


<div class="caption slides-small">
	Functions help to keep your code <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank">D.R.Y.</a>
</div>




---

## Function I/O

- `function` - Keyword to declare a new function
- `multiply` - A unique identifier / name
- `()` - Can be empty or accept input **parameters**
- `{ ... }` - Statement block contains code that will run when the function is **called**
- `return` - Return value from the function

<!-- <img src="../../assets/img/javascript-anatomy-function.png" width="400"> -->

```js
// Declare a new function that accepts two input parameters
function multiply(num1, num2){
	// Code inside the statement block (curly braces)
	// will run every time the function is called
	return num1 * num2;
}
// call the function with different inputs
console.log(multiply(2, 2)); // -> 4
console.log(multiply(10, 3)); // -> 30
```








---

## Example #1

This is the code from the previous lesson. This code runs just once.

```js
let apples = 2;

if (apples > 3) {
	console.log(`We have ${apples} apples! We can make pie!`)
} else {
	console.log(`We have ${apples} apples! We need more apples`)
}
// -> "We have 2 apples! We need more fruit."
```


---

## Example #1

<div class="twocolumn">
<div class="col">

Wrapping the previous code inside a *reusable* function lets us...

1. Run the code multiple times with different values
1. Change the value that determines the logical flow

</div>
<div class="col">


```js
function pieChance(fruit, count){
    let str = `We have ${count} ${fruit}! `;
    if (count > 3) {
        str += `We can make pie!`;
    } else {
        str += `We need more fruit.`;
    }
    return str;
}

console.log(`${pieChance("apples", 2)}`);
// -> "We have 2 apples! We need more fruit."

console.log(`${pieChance("pears", 5)}`);
// -> "We have 5 pears! We can make pie!"

console.log(`${pieChance("berries", 101)}`);
// -> "We have 101 berries! We can make pie!"
```

</div>
</div>





---

## Function Expressions

- Previously we used the [`function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) to define a function.
- Another common method is the [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function), seen below with the "fat arrow" ([arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) syntax

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



---

## Anonymous Functions

- **Anonymous functions** are function expressions that are not assigned to a name.
- They are often used as callbacks from jquery and other event listeners.
- Variables declared in anonymous functions won't conflict with other code used in your project, so they are  also often used as [IIFE (Immediately Invoked Function Expressions)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) to [limit global variables](https://developer.mozilla.org/en-US/docs/Glossary/IIFE#avoid_polluting_the_global_namespace) (see scope on next slide)

<div class="twocolumn">
<div class="col">

```js
$("form").submit(function() {
	// the code in this function
	// is used as a callback from
	// the submit listener
});
```
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

## Scope

Where you declare a variable determines its **scope**, or how it can be accessed:

- **Global Scope** - Variables can be accessed anywhere in your program
- **Local Scope** - Variables are accessible only within their statement block


```js
// ✅ global variables can be accessed anywhere
let foo = "hello";
if (true) {
	foo = "goodbye";
}
console.log("foo =", foo); // -> "goodbye"

// ❌ this will fail because it was defined (scoped) in a block
if (true){
	let bar = 123; // a local variable
}
console.log("bar =", bar); // -> "Uncaught ReferenceError: bar is not defined"
```
<div class="slides-small">
	<a href="demos/functions-scope.html" target="_blank">demos/functions-scope.html</a>
</div>






---

## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the next lesson: **Data Structures** [slides](../data-structures/slides.html) | [md](../data-structures/data-structures.md)



---

## Exercises

👉 **Try it out**

1. [Lottery v.2](../../topics/games/the-lottery/README.md) - Show results of the game in HTML
1. [Gradebook](../../topics/single-page-apps/grade-book/README.md) - Code a gradebook app using conditions, functions, and jquery.
1. Revisit [this lamp demo](../../topics/single-page-apps/javascript-lamp/index.html) to explore how it uses loops


---

## References

- Haverbeke [Ch3 Functions](https://eloquentjavascript.net/03_functions.html) (39-55)
- Codecademy Cheatsheet(s) [functions](reference-sheets/js-03-functions.pdf), [scope](reference-sheets/js-04-scope.pdf)
- w3schools [functions](https://www.w3schools.com/js/js_functions.asp), [arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)





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
