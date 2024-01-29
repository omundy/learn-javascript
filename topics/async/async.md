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

- A JS [promise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) lets you make asynchronous requests and use the result when a response is received.
- A function (like `fetch()`) that returns a promise tells the calling function the request is in progress.

```js
fetch('https://api.weather.gov/')
// -> Promise {<pending>}
// ->   [[Prototype]] : Promise 
// ->   [[PromiseState]] : "fulfilled"
// ->   [[PromiseResult]] : Response
```



---

## Fetch

- The data in the response from `fetch()` can be use in a **promise chain** where each `.then()` is performed in order.
- Below, the response is converted to JSON object in the first then, and finally logged to the console in the 2nd.


```js
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => {
		console.log(json);
	});
```

See: [Why do we need asynchronous code?](https://codepen.io/owenmundy/pen/dyKMRBN?editors=1111)


--- 

## Async/Await

- Use **async/await** to wait for a promise to be fulfilled.
- Below, `await` (inside async functions) causes the log statements to occur in order.

```js
async function fetchFunction(){
    let jsonData;
    await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => { jsonData = json; });
    return jsonData;    
}
(async function(){ 
    console.log(123)
    let data = await fetchFunction();
    console.log(data);
    console.log(456)
})()
```

See: [How to wrap fetch() in a function](https://codepen.io/owenmundy/pen/dyKOveX?editors=1011)



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

## Resources 

- ([Working with Data & APIs in Javascript](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)) by Daniel Shiffman

