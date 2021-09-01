← [Learn Javascript](README.md)

# Date, Time, Timers, and Cron Jobs with Javascript
Tutorials, references, and tips for dealing with time, events, or running code at specific times.








## The `Date` Object

The `Date` object ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [w3schools](https://www.w3schools.com/js/js_dates.asp)) in Javascript represents a single moment in time and provides a series of methods for changing or displaying that moment.

Create a `new Date` instance from the current time and print the hour. Date objects are static. Once stored the time doesn't update with passing time.
```js
let today = new Date();
console.log(today.getHours()); // -> 11
```

Create a `new Date` instance by passing a specific date and time string to the constructor
```js
let berlinWall = new Date("9 November 1989 18:53 UTC+1"); // CET (Berlin) time
console.log(berlinWall.getHours()); // -> 12 EST (NYC) time
```

The `Date` default is Coordinated Universal Time (UTC). Months and hours are zero-indexed
```js
let d = new Date(Date.UTC(2000, 0, 0, 0, 0, 0));
console.log(d); // -> "Thu Dec 30 1999 19:00:00 GMT-0500 (Eastern Standard Time)"
```


### Exercises

<details><summary>
1. Create a Date object and alert the current date and time. (click to reveal answer)</summary>

```js
let d = new Date();
alert(d);
```
</details>

<details><summary>
2. Use the correct Date method to extract the year (four digits) out of a date object.
</summary>

```js
let d = new Date();
alert(d.getFullYear());
```
</details>

<details><summary>
3. Use the correct Date method to get the month (0-11) out of a date object.
</summary>

```js
let d = new Date();
alert(d.getMonth());
```
</details>



## Tools for Formatting date and time

[luxon](https://moment.github.io/luxon/) (which [replaced moment](https://momentjs.com/docs/#/-project-status/)) is a great library to [make using time more intuitive in Javascript](https://moment.github.io/luxon/docs/manual/moment.html).

To [install](https://moment.github.io/luxon/docs/manual/install.html) add this to HTML
```html
<script src="luxon.js"></script>
```

Then use this to simplify access to the luxon [`DateTime`](https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html) class
```js
var DateTime = luxon.DateTime;
```

And now you can
```js
var dt = DateTime.now();
alert(dt.toString()); // -> "2021-03-31T12:41:34.091-05:00" ISO-formatted date string with timezone
alert(dt.year; // -> 2021
alert(dt.month; // -> 3
```

```js
DateTime.utc(2000, 0, 0, 0, 0, 0);
let d = new Date(Date.UTC(2000, 0, 0, 0, 0, 0));
console.log(d); // -> "Thu Dec 30 1999 19:00:00 GMT-0500 (Eastern Standard Time)"
```





## How to create a timer in Javascript

A loop will run any code repeatedly. **But** it does not give you control over the time intervals between execution.
```js
for(let i=0; i<10; i++){
	console.log(`this is loop #${i} `);
}
// -> this is loop #0
// -> this is loop #1
// ...
```

To make something happen repeatedly, **where you have control over the time interval**, use either [`setTimeout()`](https://www.w3schools.com/jsref/met_win_settimeout.asp) or [`setInterval()`](https://www.w3schools.com/jsref/met_win_setinterval.asp). The main difference is that `setTimeout()` runs only once, after a set number of milliseconds...
```js
setTimeout(() => {
	console.log(`this message will appear just once, after 5 seconds`);
}, 5000);
```

To run a block of code **repeatedly** use `setInterval()`.
```js
setInterval(() => {
	console.log(`this message will appear once every second, forever`);
}, 1000);
```

If you store a reference to setInterval then you can control the timer. Here is a basic countdown timer in Javascript...
```js
let counter = 20;
let timer = setInterval(() => {
	console.log(`you have ${--counter} seconds until this page explodes!!`);
	// use clearInterval to stop time  
	if (counter <= 0) {
		clearInterval(timer);
		console.log(`💥`);
	}
}, 1000);

```


You can also use recursion to call `setTimeout`, like in this example that [repeatedly adds new content to a web page](https://codepen.io/owenmundy/pen/eYgajNq?editors=1111), in order to control the interval duration.
```js
let count = 0;
function showNextResult(duration) {
  setTimeout(function () {
	  console.log(`This function has called itself ${++count} times! It will run again in ${100 * count} millis`);
	  showNextResult(100 * count);    
  }, duration);
}
showNextResult(); // start
```



## What is a Cronjob?

See this [cron example using Python](https://github.com/omundy/dig333-physical-computing/tree/master/raspberry-pi/cron-example)
