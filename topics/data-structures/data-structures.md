
← [Learn Javascript](../../README.md)

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Data Structures

How to use arrays, objects, properties, methods, and loops


## Contents

1. [Introduction](#introduction)
1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references)


## Introduction

Review the following sections and perform the activities on your own or with your group.

Perform the task(s) when you see this 👉  emoji 

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

- Demonstrate
- Explain
- Create

</details>

<details>
<summary>Homework</summary>

- [Codecademy: JS 5-1 Arrays](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)
- [Codecademy: JS 6-1 Loops](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)

</details>





- Lecture: [Data Structures](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga4ca8d22b7_0_0)




## Data Collections

In addition to [primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) (`boolean`, `number`, `string`), Javascript has data types to store data collections, which can include `arrays`, `objects`, as well as more complex entities, hierarchical collections, and lists.





### Arrays

A Javascript [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is a list of values, separated by commas. Arrays are zero-indexed, and their values can be set or retrieved using their index.
```js
const numberArr = [-2, -1, 0, 1, 2]; // array of numbers
const colorArr = ["red", "green", "blue"]; // array of strings
console.log(colorArr[0]); // -> "red"
```

Arrays can also store other arrays
```js
const tableArr = [
	['name', 'age', 'favoriteColor'],
	['Mary', 18, 'mauve'],
	['Chalet', 81, 'chartreuse']
];
```
as well as complex objects.
```js
// array of date objects
const dates = [
	new Date(Date.UTC(1989, 10, 9, 17, 53, 0)), // UTC
	new Date("9 November 1989 18:53 UTC+1"), // BERLIN
	new Date("November 9, 1989 12:53 UTC-5") // NYC
];
console.log(dates[1].toUTCString()); // -> "Thu, 09 Nov 1989 17:53:00 GMT" (Berlin local time)
```



### Objects

A Javascript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) stores `key:value` relationships where `key` is a string, and `value` can be a primitive, array, or object. The values are then referenced with their keys using either square brackets or dot notation.
```js
const color = {
	name: "red",
	hex: "#ff0000",
	rgb: [255,0,0]
}
console.log(color.name); // -> "red" via dot notation
console.log(color['name']); // -> "red" via square brackets
```

You can also store functions ([called methods when stored inside an object](https://medium.com/predict/javascript-functions-vs-methods-and-other-helpful-tips-e58a621b1d27)).
```js
const ev = {
	name: "Fall of the Berlin Wall",
	link: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall",
	date: new Date(Date.UTC(1989, 10, 9, 17, 53, 0)),
	timeZone: "CET",
	getLocalTimeStr: function(){
		return this.date.toLocaleString('de-DE', {timeZone: this.timeZone})
	}
};
console.log(`${ev.name}, ${ev.date.getUTCFullYear()}`); // -> "Fall of the Berlin Wall, 1989"
console.log(ev.getLocalTimeStr()); // -> "9.11.1989, 18:53:00"
```














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










## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../README.md#javascript-part1).


## Exercises

👉 **Try it out**

1. [Lottery v.1](../../topics/games/the-lottery/README.md) - Build your first game!
1. [Gradebook](../../topics/single-page-apps/grade-book/README.md) - Code a gradebook app using conditions, functions, and jquery.
1. Exercises from Eloquent Javascript Ch2 [Looping a triangle](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [FizzBuzz](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [Chessboard](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe)


- Exercises: CH4 [The sum of a range](https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/), [Reversing an array](https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5), [A list](https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M), [Deep comparison](https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC)


## References


- Haverbeke: [Ch4 Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html) (57-79)
- Codecademy Cheatsheet(s) [arrays](reference-sheets/js-05-arrays.pdf), [loops](reference-sheets/js-06-loops.pdf)
- w3schools [arrays](https://www.w3schools.com/js/js_arrays.asp), [objects](https://www.w3schools.com/js/js_objects.asp), [json](https://www.w3schools.com/js/js_json_intro.asp), [json syntax](https://www.w3schools.com/js/js_json_syntax.asp), [methods](https://www.w3schools.com/js/js_htmldom_methods.asp), [for loop](https://www.w3schools.com/js/js_loop_for.asp), [break](https://www.w3schools.com/js/js_break.asp)
