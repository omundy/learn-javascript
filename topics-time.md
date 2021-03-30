
# Dates, Times, Timers, and Cron with Javascript
Tutorials, references, and tips for dealing with time, events, or running code over or at specific times.






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






## Formatting date and time

moment() is dead



## What is a Cronjob?

See this [cron example using Python](https://github.com/omundy/dig333-physical-computing/tree/master/raspberry-pi/cron-example)
