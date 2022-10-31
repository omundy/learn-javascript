<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Document Object Model (DOM)

Working with the dom

<span class="slides-small"><a href="slides.html">slides</a> | <a href="dom.md">md</a></span>

<!--
Presentation comments ...
-->


---

## Contents

1. [Introduction](#introduction)
1. [Selecting HTML elements](#selecting-html-elements) `5 min`
1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references)



---

## Introduction

Review the following sections and perform the activities on your own or with your group.

Perform the task(s) when you see this 👉  emoji

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

- Demonstrate how to
- Explain
- Use Javascript to
- List

</details>

<details>
<summary>Homework</summary>

- [Haverbeke Ch13 JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html) (216-222)
- [Haverbeke Ch14 The Document Object Model](https://eloquentjavascript.net/14_dom.html) (224-241)
- [Haverbeke Ch15 Handling Events](https://eloquentjavascript.net/15_event.html) (243-259)
- [Haverbeke Ch18 HTTP and Forms](https://eloquentjavascript.net/18_http.html) (308-328)

</details>




---

## About the DOM

- Every time a web page loads, a new DOM object is created.
- Accessible at `window.document` or just `document` it points to the page structure, content, and properties.

<img src="../../assets/img/javascript-diagram-dom.png" width="100%">





---

## Selecting HTML elements

Many properties can be access with "vanilla" Javascript

```js
// get the current URL
window.alert(document.URL);
// set a new value for the bgColor property
window.document.bgColor = "red"
// replace the content of the body
window.document.body.innerText = "😃"
```




---

## Selecting HTML elements

<div class="twocolumn2x1">
<div class="col">

- There are several methods to select an element in the DOM.
- [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) returns the first Element within the document that matches the specified selector, or group of selectors.

</div>
<div class="col">

```html
<p id="greeting">Hello world</p>
```

```js
// store a reference to the dom element using the id to select it
let element = document.querySelector("p#greeting");
// get the text
console.log(element.textContent);
// set the text
element.textContent = "Hello world!";
```

</div>
</div>





---

## jQuery and The DOM

How to access properties and methods in the HTML DOM with Javascript and jQuery

```js
// select all divs, set backgrounds red
$('div').css({ 'background': 'red' });
// select all elements with myClass, add text to end
$('.myClass').append(' - here is some new text');
```


NOTE: https://youmightnotneedjquery.com/




---

## Forms and Events


```html
<form action="#">
  <input type="text" id="hi">
  <input type="submit">
</form>
```

```js
document.addEventListener("submit", function(e){
	console.log(document.getElementById("hi").value);
  e.preventDefault();
})
```

https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault





---

## Forms and Events with jQuery

**Overview**: Events and using forms with Javascript and jQuery

```js
// click event with callback
$('#submitButton').click(function() {
	// set the value of a form element
	$('#color').val("purple");
	// do not perform the default form action
	return false;
});
```






---

## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../).


---

## Exercises

👉 **Try it out**

1. [The Lottery v.2](demos/games/the-lottery/) - responding to events, [The Lottery v.3](demos/games/the-lottery/) - displaying content in the browser
	- Already finished? Add a way to spend more money in the lottery game
1. Exercises from Eloquent Javascript
	- Exercises: Ch14 [Build a table](https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe), [Elements by tag name](https://eloquentjavascript.net/14_dom.html#i_VSftnyRTsV), [The cat’s hat](https://eloquentjavascript.net/14_dom.html#i_b/LAqZUqyo)
	- Ch15 [Balloon](https://eloquentjavascript.net/15_event.html#i_ZPJB9UFdQA), [Mouse trail](https://eloquentjavascript.net/15_event.html#i_NOgRH0Y9st), [Tabs](https://eloquentjavascript.net/15_event.html#i_Kk1WKx2anJ)
	- Ch18 [Content negotiation](https://eloquentjavascript.net/18_http.html#i_uaWwL8WGXf), [A JavaScript workbench](https://eloquentjavascript.net/18_http.html#i_wTXvIH5Wds), [Conway’s Game of Life](https://eloquentjavascript.net/18_http.html#i_XyKQVmCbTN)






---

## References

- Haverbeke [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-26)
- Codecademy Cheatsheet(s) [Conditionals](../../reference-sheets/js-02-conditionals.pdf)
- Codecademy Cheatsheet(s) [jquery introduction](reference-sheets/jquery-01-introduction.pdf), [effects](reference-sheets/jquery-02-effects.pdf), [jquery events](reference-sheets/jquery-03-events.pdf), [style methods](reference-sheets/jquery-04-style-methods.pdf), [dom traversing](reference-sheets/jquery-05-dom-traversing.pdf)
- w3schools [DOM](https://www.w3schools.com/js/js_htmldom.asp), [HTML DOM](https://www.w3schools.com/js/js_htmldom_html.asp), [jQuery intro](https://www.w3schools.com/jquery/jquery_intro.asp), [Get Started](https://www.w3schools.com/jquery/jquery_get_started.asp), [syntax](https://www.w3schools.com/jquery/jquery_syntax.asp), [selectors](https://www.w3schools.com/jquery/jquery_selectors.asp), [event methods](https://www.w3schools.com/jquery/jquery_events.asp)
- w3schools [Javascript practice](https://www.w3schools.com/js/exercise_js.asp)
