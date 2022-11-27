<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Asynchronous Javascript

How to use callbacks, fetch, promises, async/await, etc.

<span class="slides-small"><a href="slides.html">slides</a> | <a href="async.md">md</a></span>

<!--
Presentation comments ...
-->






---

## Sync vs. Async

- When getting data from the hard disk or network you will encounter **latency**—the amount of time it takes the data to arrive.
- **Asynchronous** code ensures such operations (e.g. API responses) have completed before using the data of the response.

<div class="twocolumn">
<div class="col">

```js
// synchronous code
function example1(num) {
	console.log("🐱", num);
}
example1(1);
console.log("🐱", 2);
```

<details class="slides-small">
<summary>What is the order?</summary>
Left: 1,2; Right: 2,1<br>
Also see <a href="https://codepen.io/owenmundy/pen/dyKMRBN" target="_blank">Why do we need asynchronous code? (codepen)</a>
</details>

</div>
<div class="col">

```js
// asynchronous code
function example2(num){
	setTimeout(function(){
		console.log("🐨", num);
	}, 1000);
}
example2(1);
console.log("🐨", 2);
```

</div>
</div>




---

## Async code

Here are some ways you can deal with latency in Javascript:

1. Event Handlers
1. Callbacks
1. Promises & Async/Await





---

## Event Handlers

If you have used event listeners or jQuery then you are already know <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#event_handlers" target="_blank">Event Handlers</a>.

```js
// vanilla JS
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
	console.log("click!!");
});

// jQuery
$("button").click(function() {
	console.log("click!!");
});
```







---

## Callbacks

- A **callback** is a function that is passed to another function, to be called once the function is complete.
- Callbacks were once the primary strategy for asynchronous code in JavaScript.
- The jQuery function from the previous lesson can be written either way...

<div class="twocolumn">
<div class="col">

```js
// callback function is embedded
$("button").click(function() {
	console.log("click!!");
});
```

</div>
<div class="col">

```js
// callback stored in variable
let callback = function() {
	console.log("click!!");
}
$("button").click(callback);
```

</div>
</div>




---

## Callback Hell

Since callbacks require nesting functions, it makes your code difficult to manage.

```js
let arr = []; // a rather extreme version of callback hell or "the pyramid of doom"
getUser(id1, function(user1){
	arr.push(user1.name);
	if (user1.friends.length > 0){
		getUser(user1.friends[0], function(user2){
			arr.push(user2.name);
			if (user2.friends.length > 0){
				getUser(user2.friends[0], function(user3){
					arr.push(user3.name); // and so on until done
				});
			}
		});
	}
});
getUser(1); // getting a list of connections
```


---

## Promises

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

- A promises is how we do asynchronous code in modern Javascript
- Functions that return a promise give the calling function a way to get the response... once it is done.
- Promises can be used several ways, but most often as **promise chain** or by using **async/await**.









---

## Fetch

[Why do we need asynchronous code?](https://codepen.io/owenmundy/pen/dyKMRBN?editors=1111)
[How to wrap fetch() in a function](https://codepen.io/owenmundy/pen/dyKOveX?editors=1011)

```js
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => {
		console.log(json);
	});
```








<!--
FROM THE OLD REPO, NEED TO DELETE OR INTEGRATE

```js
// callback example
function log(answer) {
	console.log("The answer is " + answer);
}
function sum(n1, n2, callback) {
	// sum n1, n2 and invoke callback function
	callback(n1 + n2);
}
// pass a function as a callback
sum(5, 5, log);

// promise example
function waitForPromise(param) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(param);
		}, 2000);
	});
}
// async function
async function test() {
	let str = "";
	// use await to wait for promise in synchronous code
	str += await waitForPromise("🤡");
	console.log(str);
	str += await waitForPromise(" lurks");
	console.log(str);
	str += await waitForPromise(" in the shadows");
	console.log(str);
}
test();
```

-->










---

## Next steps

1. Explore [./demos](./demos).
1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../).



---

## Exercises

👉 **Try it out**

1. Ch11 [Tracking the scalpel](https://eloquentjavascript.net/11_async.html#i_UvyahfUnfl), [Building Promise.all](https://eloquentjavascript.net/11_async.html#i_Ug+Dv9Mmsw)




## References

- Codecademy Cheatsheet(s) [promises](reference-sheets/js-12-promises.pdf), [async-await](reference-sheets/js-13-async-await.pdf), [Requests](reference-sheets/js-14-requests.pdf)
- w3schools [callbacks](https://www.w3schools.com/js/js_callback.asp), [asynchronous](https://www.w3schools.com/js/js_asynchronous.asp), [promises](https://www.w3schools.com/js/js_promise.asp), [async-await](https://www.w3schools.com/js/js_async.asp), [AJAX](https://www.w3schools.com/jquery/jquery_ajax_intro.asp), [jquery get/post](https://www.w3schools.com/jquery/jquery_ajax_get_post.asp), [fetch](https://www.w3schools.com/js/js_api_fetch.asp)
- [Modern Asynchronous JavaScript with Async and Await](https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await)
- Haverbeke: [Ch11 Asynchronous Programming](https://eloquentjavascript.net/11_async.html) (180-201)




---

## Other Tutorials

Daniel Shiffman's - Working with Data & APIs in Javascript ([playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X))

- [Introduction](https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=1) and [Setup](https://www.youtube.com/watch?v=hPbDyqzxQfU&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=2)
- [1.1 fetch()](https://www.youtube.com/watch?v=tc8DU14qX6I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=3)
- [1.2 Tabular Data](https://www.youtube.com/watch?v=RfMkdvN-23o&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=4)
- [1.3 Graphing with Chart.js](https://www.youtube.com/watch?v=5-ptp9tRApM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=5)
- [1.4 JSON](https://www.youtube.com/watch?v=uxf0--uiX0I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=6)
- [1.6 Refreshing Data with setInterval()](https://www.youtube.com/watch?v=jKQUHGpOHqg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=8)
- [2.1 Server-side with Node.js](https://www.youtube.com/watch?v=wxbQP1LMZsw&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=9)
- [2.2 Geolocation Web API](https://www.youtube.com/watch?v=3ls013DBcww&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=10)
- [2.3 HTTP Post Request with fetch()](https://www.youtube.com/watch?v=Kw5tC5nQMRY&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=11)
- [2.4 Saving to a Database](https://www.youtube.com/watch?v=xVYa20DCUv0&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=12)
- [2.5 Database Query](https://www.youtube.com/watch?v=q-lUgFxwjEM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=13)
- [2.6 Saving Images and Base64 Encoding](https://www.youtube.com/watch?v=9Rhsb3GU2Iw&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=14)
- [2.7 Project Wrap-up: Accessibility and Design](https://www.youtube.com/watch?v=1mnpn6q25FI&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=15)
- [3.1 API calls from Node.js (Weather data from Dark Sky)](https://www.youtube.com/watch?v=ZtLVbJk7KcM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=16)
- [3.2 Open Air Quality API in Node.js](https://www.youtube.com/watch?v=Tiot877orkU&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=17)
- [3.3 Mapping Database Entries with Leaflet.js](https://www.youtube.com/watch?v=r94kI6my0QQ&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=18)
- [3.4 Hiding API Keys with Environment Variables (dotenv) and Pushing Code to GitHub](https://www.youtube.com/watch?v=17UVejOw3zA&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=19)
- [3.5 Web Application Deployment (Glitch and Heroku) ](https://www.youtube.com/watch?v=Rz886HkV1j4&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=20)
