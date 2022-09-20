
← [Learn Javascript](../../README.md)

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Document Object Model (DOM)

Comparison and logical operators, conditional statements


## Contents

1. [Introduction](#introduction)
1. [Selecting HTML elements](#selecting-html-elements) `5 min`


1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references)


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



</details>



## DOM



## Selecting HTML elements



## JQuery for selection



## Forms


##





## Selecting HTML elements

In order for Javascript to change values on a web page, we have to use it to **select** elements. There are several ways to do this.


Type this into the Console and hit return.

```js
window
```

The window is your key to accessing the DOM (Document Object Model) with Javascript. You can set or get any value stored in the page, or use any method (function) that is built in. Try some of these:














## Web Forms


```

<form action="#">

  <input type="text" id="hi">
  <input type="submit">
</form>

```

document.addEventListener("submit", function(e){
	console.log(document.getElementById("hi").value);
  e.preventDefault();
})

https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault














&nbsp;
<!---
comments
-->
## jQuery and The DOM


NOTE: https://youmightnotneedjquery.com/

**Overview**: How to access properties and methods in the HTML DOM with Javascript and jQuery

```js
// get the current URL
window.alert(document.URL);
// set a new value for the bgColor property
window.document.bgColor = "red"
// replace the content of the body
window.document.body.innerText = "😃"
// select all divs, set backgrounds red
$('div').css({ 'background': 'red' });
// select all elements with myClass, add text to end
$('.myClass').append(' - here is some new text');
```

- Lecture: [The DOM](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga8da2c3fcb_0_52), [jQuery](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.gb2d4fd0026_0_24)
- Demo: [The Lottery v.2](demos/games/the-lottery/) - responding to events, [The Lottery v.3](demos/games/the-lottery/) - displaying content in the browser
- Exercise: Add a way to spend more money in the lottery game

#### Homework

- Haverbeke:
	- [Ch13 JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html) (216-222)
	- [Ch14 The Document Object Model](https://eloquentjavascript.net/14_dom.html) (224-241)
- Exercises: Ch14 [Build a table](https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe), [Elements by tag name](https://eloquentjavascript.net/14_dom.html#i_VSftnyRTsV), [The cat’s hat](https://eloquentjavascript.net/14_dom.html#i_b/LAqZUqyo)

#### Review

- Codecademy Cheatsheet(s) [jquery introduction](reference-sheets/jquery-01-introduction.pdf), [effects](reference-sheets/jquery-02-effects.pdf)
- w3schools [DOM](https://www.w3schools.com/js/js_htmldom.asp), [HTML DOM](https://www.w3schools.com/js/js_htmldom_html.asp)

**Assessment**: Quiz; Homework review










&nbsp;
<!---
comments
-->
## Forms and Events

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

- Lecture: [Forms & Events](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit#slide=id.ga4ca8d22b7_0_115)
- Demo: [The Lottery v.2](demos/games/the-lottery/) - responding to events, [The Lottery v.3](demos/games/the-lottery/) - displaying content in the browser
- Exercise: Add a way to spend more money in the lottery game


#### Homework

- Haverbeke:
	- [Ch15 Handling Events](https://eloquentjavascript.net/15_event.html) (243-259)
	- [Ch18 HTTP and Forms](https://eloquentjavascript.net/18_http.html) (308-328)
- Exercises:
	- Ch15 [Balloon](https://eloquentjavascript.net/15_event.html#i_ZPJB9UFdQA), [Mouse trail](https://eloquentjavascript.net/15_event.html#i_NOgRH0Y9st), [Tabs](https://eloquentjavascript.net/15_event.html#i_Kk1WKx2anJ)
	- Ch18 [Content negotiation](https://eloquentjavascript.net/18_http.html#i_uaWwL8WGXf), [A JavaScript workbench](https://eloquentjavascript.net/18_http.html#i_wTXvIH5Wds), [Conway’s Game of Life](https://eloquentjavascript.net/18_http.html#i_XyKQVmCbTN)

#### Review

- Codecademy Cheatsheet(s) [jquery events](reference-sheets/jquery-03-events.pdf), [style methods](reference-sheets/jquery-04-style-methods.pdf), [dom traversing](reference-sheets/jquery-05-dom-traversing.pdf)
- w3schools [jQuery intro](https://www.w3schools.com/jquery/jquery_intro.asp), [Get Started](https://www.w3schools.com/jquery/jquery_get_started.asp), [syntax](https://www.w3schools.com/jquery/jquery_syntax.asp), [selectors](https://www.w3schools.com/jquery/jquery_selectors.asp), [event methods](https://www.w3schools.com/jquery/jquery_events.asp)
- w3schools [Javascript practice](https://www.w3schools.com/js/exercise_js.asp)

**Assessment**: Quiz; Homework review











## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../README.md#javascript-part1).




## References

- Haverbeke [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-26)
- Codecademy Cheatsheet(s) [Conditionals](../../reference-sheets/js-02-conditionals.pdf)
- W3schools [operators](https://www.w3schools.com/js/js_operators.asp), [assignment](https://www.w3schools.com/js/js_assignment.asp), [arithmetic](https://www.w3schools.com/js/js_arithmetic.asp), [comparisons](https://www.w3schools.com/js/js_comparisons.asp), [conditions](https://www.w3schools.com/js/js_if_else.asp), [output](https://www.w3schools.com/js/js_output.asp)
