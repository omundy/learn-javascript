<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Data Structures

How to use Javascript arrays, objects, and loops

<span class="slides-small"><a href="slides.html">slides</a> | <a href="data-structures.md">md</a></span>

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

- Explain the difference between arrays and objects
- Demonstrate how to loop through an array to display its values in HTML
- Create a Javascript object to represent some real life entity

</details>

<details>
<summary>Homework</summary>

- [Codecademy: JS 5-1 Arrays](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)
- [Codecademy: JS 6-1 Loops](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)

</details>






---

## Data Collections

In addition to <a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank">primitive data types</a>, Javascript can store **collections** of data like `arrays` and `objects`, as well as more complex entities.

![true](../../assets/img/javascript-diagram-data-types.png)



---

## Arrays

- A Javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">array</a> is a list of values, separated by commas.
- You can **get** or **set** an array value using its index.
- Arrays are zero-indexed. Their length counts from `1`, but the first index is `0`.

```js
let numbers = [-2, -1, 0, 1, 2]; // array of numbers
let colors = ["purple", "green", "blue"]; // array of strings
colors.length; // -> 3
colors[0]; // -> "purple"
colors[0] = "red"; // set the value of the first index
colors[0]; // -> "red"
```



---

## Array Methods

<div class="twocolumn2x1">
<div class="col">

Like other Javascript types, the console can list properties and methods specific to arrays.

👉 **Try it out** - Run these in the console

```js
[] // the array constructor
// how many indexes?
["abc", 123].length
// create array, confirm length
let colors = ["red", "green", "blue"]
// what is the index of "green"?
colors.indexOf("green")
// what will this return?
colors.slice(1,3)
```

<details>
<summary>Solution</summary>

```js
["abc", 123].length // -> 2
colors.indexOf("green") // -> 1
colors.slice(1,3) // -> ["green", "blue"]
```

</details>

</div>
<div class="col">

<img width="340" src="../../assets/img/console-array-methods-light.png">

</div>
</div>










---

## Loops

- One of the biggest benefits to working with arrays is that you can loop through them.
- A loop will repeat a block of code based on some condition.

<img src="../../assets/img/javascript-diagram-control-structures-loop.png">


---

## Loop Anatomy

The `for` loop in Javascript explicitly shows the three parts of a loop control structure: 1) Create control variable 2) Test the condition 3) Iterate on each loop

<img  src="../../assets/img/javascript-anatomy-loop-for.png">



---

## Loops

<div class="twocolumn">
<div class="col">

- This code shows both the `for` loop and the `forEach` built-in to the `Array` type.
- `Array.forEach` uses a callback function that receives the value and iterator (here we name it `index`)
- These both output the same values

</div>
<div class="col">

```js
// for loop
for (var i = 0; i < colors.length; i++){
	console.log(i, colors[i]);
}

// built-in array forEach
colors.forEach(function(value, index){
	console.log(index, value);
});

// -> 0 "red"
// -> 1 "green"
// -> 2 "blue"

```

<div class="caption slides-small">
	While <code>.forEach</code> is syntactically simpler to write, one small issue is <a href="https://futurestud.io/tutorials/how-to-exit-stop-or-break-an-array-foreach-loop-in-javascript-or-node-js#:~:text=There%20is%20no%20way%20to,method%20is%20the%20wrong%20tool." target="_blank">they are not easy to break from</a>.
</div>

</div>
</div>




---

## Multi-Dimensional Arrays

You can store different data types in a JS array. This includes other arrays.

```js
// an array of arrays
const table = [
	['name', 'age', 'favoriteColor'],
	['Mary', 18, 'mauve'],
	['Pam', 33, 'periwinkle'],
	['Chalet', 81, 'chartreuse']
];
table[1][2] // -> 'mauve'
```

👉 How would you loop through this array to output all individual the values?

<details>
<summary>Solution</summary>

A loop inside a loop

</details>


---

## Multi-Dimensional Arrays

Arrays can also store objects and other complex types.

```js
// array of date objects
const dates = [
	new Date(Date.UTC(1989, 10, 9, 17, 53, 0)), // UTC
	new Date("9 November 1989 18:53 UTC+1"), // BERLIN
	new Date("November 9, 1989 12:53 UTC-5") // NYC
];
dates[1].toUTCString()
// -> "Thu, 09 Nov 1989 17:53:00 GMT" (Berlin local time)
```







---

## Objects

- A Javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">object</a> is another hierarchical format for storing collections.
- A key difference from arrays: data in objects must be stored with `key:value` relationships where `key` is a string, and `value` is any data type.
- You can **get** or **set** object values using dot notation and the key.

```js
const color = {
	"name": "red",
	"hex": "#ff0000",
	"rgb": [255,0,0]
}
console.log(color.name); // -> "red" via dot notation
console.log(color['name']); // -> "red" via square brackets
```

<div class="caption slides-small">
	You can also use square brackets to fetch the value, which is required if there is a special character or space in the key name.
</div>






---

## Object Methods

👉 **Try it out** - Run these in the console

```js
// expand object the constructor to see more methods
{}
// create instance of built-in Date() object
let d = new Date()
// The following methods are specific to the Date object
d.getFullYear()
// and show how objects can "encapsulate" their properties
d.toISOString()
// and methods to make them easier use.
d.valueOf()
```

<details>
<summary>Solution</summary>

```js
// -> 2022
// -> '2022-10-29T12:00:04.566Z'
// -> 1667044804566
```
[`Date.toISOString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) converts to the [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) date format
[`Date.valueOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf) returns date and time as milliseconds since January 1, 1970 00:00:00 UTC

</details>

<!--
// arrays are technically objects
typeof([]) // -> 'object' -->






---

## Encapsulation

- Objects in arrays are handy because they <a href="https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)" target="_blank">encapsulate</a> data, grouping like information inside a single container, and standardizing access.

```js

var people = [
	{ name: "Joel", age: 99 },
	{ name: "John", age: 66 },
	{ name: "Jack", age: 33 }
];
people.forEach(function(item, index){
	console.log(`${item.name} is ${item.age} years old`);
});
// -> Joel is 99 years old
// -> John is 66 years old
// -> Jack is 33 years old
```






---

## JSON

- <a href="https://www.w3schools.com/js/js_json_intro.asp" target="_blank">JSON</a> (JavaScript object notation) is a serialized (saved as a string, not as memory) Javascript object that can be saved in / retrieved from `.json` files by your program.
- Just like objects, you can store any* type in a JSON file, including arrays and other objects.

```json
[
	{ "color":"red", "rgb": [255,0,0] },
	{ "color":"orange", "rgb": [255,165,0] },
	{ "color":"yellow", "rgb": [255,255,0] },
	{ "color":"green", "rgb": [0,255,0] },
	{ "color":"blue", "rgb": [0,0,255] },
	{ "color":"indigo", "rgb": [75,0,130] },
	{ "color":"violet", "rgb": [238,130,238] },
]
```

<script>
let colors = [
	{ "color":"red", "rgb": [255,0,0] },
	{ "color":"orange", "rgb": [255,165,0] },
	{ "color":"yellow", "rgb": [255,255,0] },
	{ "color":"green", "rgb": [0,255,0] },
	{ "color":"blue", "rgb": [0,0,255] },
	{ "color":"indigo", "rgb": [75,0,130] },
	{ "color":"violet", "rgb": [238,130,238] },
];
console.log("JSON output to string");
colors.forEach(function(item, index){
	console.log(JSON.stringify(item));
});
</script>

<div class="caption slides-small">
	*Any type except methods
</div>




---

## JSON Examples

<div class="twocolumn">
<div class="col">

- Practically every mobile app you use is sending and receiving JSON data “behind the scenes”.
- Here are some examples from Tally Saves the Internet! <a href="https://tallysavestheinternet.com/api/" target="_blank">hello</a>, <a href="https://tallysavestheinternet.com/api/user/verifyUser" target="_blank">auth</a>, <a href="https://tallysavestheinternet.com/api/user/getTallyUser" target="_blank">game data</a>, <a href="https://tallysavestheinternet.com/api/anonyname" target="_blank">anonyname</a> and I Know Where Your Cat Lives <a href="https://iknowwhereyourcatlives.com/inc/get_data.php?action=select_random" target="_blank">random cat</a>, <a href="https://iknowwhereyourcatlives.com/inc/get_data.php?action=select_cat&guid=thisisnotaguid&init=true" target="_blank">cat not found</a>

</div>
<div class="col">

<img width="70%"  src="../../assets/img/json-tally-user.png">

</div>
</div>









---


## Next steps

1. Explore [More Concepts](#more-concepts) at the end
1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the next lesson: **jQuery** [slides](../jquery/slides.html) | [md](../jquery/jquery.md)



---

## Exercises

👉 **Try it out**

1. [Lottery v.3](https://omundy.github.io/learn-javascript/topics/games/the-lottery/) - Display all results within the HTML of the page
1. Exercises from Eloquent Javascript
	1. Ch2 [Looping a triangle](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [FizzBuzz](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [Chessboard](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe)
	1. CH4 [The sum of a range](https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/), [Reversing an array](https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5), [A list](https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M), [Deep comparison](https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC)




---

## References

- Lili Ouaknin Felsen [Functional vs Object-Oriented vs Procedural Programming](https://medium.com/@LiliOuakninFelsen/functional-vs-object-oriented-vs-procedural-programming-a3d4585557f3) 2017
- Haverbeke: [Ch4 Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html) (57-79)
- Codecademy Cheatsheet(s) [arrays](reference-sheets/js-05-arrays.pdf), [loops](reference-sheets/js-06-loops.pdf)
- w3schools [arrays](https://www.w3schools.com/js/js_arrays.asp), [objects](https://www.w3schools.com/js/js_objects.asp), [json](https://www.w3schools.com/js/js_json_intro.asp), [json syntax](https://www.w3schools.com/js/js_json_syntax.asp), [methods](https://www.w3schools.com/js/js_htmldom_methods.asp), [for loop](https://www.w3schools.com/js/js_loop_for.asp), [break](https://www.w3schools.com/js/js_break.asp)




---

## More Concepts

Continue for more related concepts.



---

## Objects

- In addition to storing virtually any other datatype, custom objects can store methods ("functions") and reference internal data with the `this` keyword.

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
console.log(`${ev.name}, ${ev.date.getUTCFullYear()}`);
// -> "Fall of the Berlin Wall, 1989"
console.log(ev.getLocalTimeStr()); // -> "9.11.1989, 18:53:00"
```
