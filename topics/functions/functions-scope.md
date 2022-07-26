
← [Learn Javascript](../../README.md)

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Functions & Scope

Reusing code, protecting variables, callback functions











Functions are the next step in creating control structures. Say we have the code from the previous lesson

```js
let apples = 2;
if (apples > 3) {
	console.log("we can make pie!")
} else {
	console.log("we need more apples")
}
apples = apples + 10;
console.log(`We have ${apples} apples!`);
```

What if we wanted to make it so a user could change the value stored in `apples` and then run the check again? This is where functions come in...

```js
let apples = 2;
console.log(`We have ${apples} apples!`);

function checkApples(_apples){
    if (_apples > 3) {
    	return "we can make pie!";
    } else {
    	return "we need more apples";
    }
}




apples = apples + 10;

```


There are a few things going on in here:

1. The conditional that formerly outputted a string is now inside a *reusable* function.
1. The variable that we evaluate in the function is **scoped** only to that function. We use an underscore before it to remember that. See functional programming for more.

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0


https://en.wikipedia.org/wiki/Side_effect_(computer_science)









&nbsp;
<!---
comments
-->
## Control Flow, Functions, Loops

**Overview**: How to use bindings, conditionals, loops, and functions to let your code make decisions

- [Functions & Scope](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga4ca8d22b7_0_28)
-
-

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
	-
	- [Ch3 Functions](https://eloquentjavascript.net/03_functions.html) (39-55)
- Codecademy:
 	-
	- [3-1 Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-7)
	- [4-1 Scope](https://www.codecademy.com/learn/introduction-to-javascript) (1-4)

	- Ch3 [Minimum](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Recursion](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do), [Bean Counting](https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do)

#### Review

- Codecademy Cheatsheet(s) [functions](reference-sheets/js-03-functions.pdf), [scope](reference-sheets/js-04-scope.pdf)
- w3schools [functions](https://www.w3schools.com/js/js_functions.asp), [arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)










### Side Effects

These are statements with **side effects**. Instead of returning a value, they evaluate the expression and then produce some other effect. The built-in `alert()` function opens a popup window to show the value that is returned from the expression.

```js
alert(1 + 1);
console.log(1 < 2);
```

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0



## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../README.md#javascript-part1).


## Exercises

👉 **Try it out**

1. [Lottery v.3](../../topics/games/the-lottery/README.md) - Show results of the game in HTML
1. [Gradebook](../../topics/single-page-apps/grade-book/README.md) - Code a gradebook app using conditions, functions, and jquery.
1. Revisit [this lamp demo](../../topics/single-page-apps/javascript-lamp/index.html) to explore how it uses loops
