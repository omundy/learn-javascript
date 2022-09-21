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

<img src="../../assets/img/javascript-diagram-function-io.png" width="800">


<div class="caption slides-small">
	Functions help to keep your code <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank">D.R.Y.</a>
</div>


---

## Function I/O

- Define a function with the `function` keyword, a unique name, two parentheses, and a statement block.
- The code inside the statement block (the curly braces `{ ... }` ) is executed when the function is **called**.

<img src="../../assets/img/javascript-anatomy-function.png" width="800">





---

## Function Example

Look at the code from the previous lesson. This code runs once and that is all.

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

## Function Example

<div class="twocolumn">
<div class="col">

Wrapping the code with a function block lets us

1. Change the value that determines the logical flow
2. Run the code multiple times with different values

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

There are a few things going on in here:

1. The conditional that formerly outputted a string is now inside a *reusable* function.
1. The variable that we evaluate in the function is **scoped** only to that function. We use an underscore before it to remember that. See functional programming for more.








---

## Another Example

```js

function isSandwich(str) {
	let result = true;

	if (str[0] != "🥖" || str[0] != "🍞") result = false;
	if (str[str.length-1] != "🥖" || str[str.length-1] != "🍞") result = false;


	if (str.match < 1 "🥓" && b == "🥬" && c == "🍅")  result = false;
	else if (a == "🥖" && b == "🧀" && c == "🥖")  result = false;
	else if (a == "🥖" && b == "🥓" && c == "🥖")  result = false;
	else if (a == "🥖" && b == "🥓" && c == "🧀" && d == "🥖")  result = false;
	else if (a == "🍔" || a == "🌭")  result = false;
	return false;
}

```




---

## Another Example

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

## Scope

All variables have scope—the part of your program in which it can be accessed. There are two types:

- Global: A variable is accessible by the whole program
- Local: A variable is accessible only within its statement block









---

## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the next lesson: **Data Structures** [slides](../data-structures/slides.html) | [md](../data-structures/data-structures.md)



---

## Exercises

👉 **Try it out**

1. [Lottery v.3](../../topics/games/the-lottery/README.md) - Show results of the game in HTML
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
