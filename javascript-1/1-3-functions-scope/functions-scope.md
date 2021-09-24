
← [Control Flow](1-2-control-flow.md) | [Functions & Scope](1-3-functions-scope.md) →

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# 1-2 Functions & Scope

Reusing code, protecting variables, callback functions























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
