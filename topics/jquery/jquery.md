<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a> <a href="../../"><img width="150" src="../../assets/img/logos/logo-jquery-240sq.png"></a>

# jquery

How to use jquery for interaction, display, and data

<span class="slides-small"><a href="slides.html">slides</a> | <a href="jquery.md">md</a></span>

<!--
Presentation comments ...
-->


---


## Contents

1. [Introduction](#introduction)
1. [What is jquery](#what-is-jquery)
1. [Write less, do more](#write-less-do-more)
1. [Installation](#installation)
1. [jQuery syntax](#jquery-syntax)
1. [jQuery examples](#jquery-examples)
1. [Selectors](#selectors)
1. [Events](#eevnt)
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

- Demonstrate how to import and use jquery library in a web page
- Explain how jquery selectors, chaining (dot notation), and callback functions operate.
- Use Javascript and jquery to listen for user events, get and set data, and control the display of elements on a web page

</details>

<details>
<summary>Homework</summary>

- [Previous lessons and homework](../../README.md)
- Codecademy jquery Cheatsheets
    - [Introduction](../../reference-sheets/jquery-01-introduction.pdf)
    - [Effects](../../reference-sheets/jquery-02-effects.pdf)
    - [Event Handlers](../../reference-sheets/jquery-03-events.pdf)
    - [Style Methods](../../reference-sheets/jquery-04-style-methods.pdf)
    - [Traversing the DOM](../../reference-sheets/jquery-05-dom-traversing.pdf)
- Quiz 10 - JS jQuery and the DOM

</details>






---


## What is jquery

jquery is a Javascript library that reduces the complexity of working with HTML.

It is the most [widely deployed Javascript library](https://w3techs.com/technologies/overview/javascript_library) (just ahead of Bootstrap)

It's goal, "write less, do more", helps with:

- **Selection** - Simplifies selecting one or multiple elements with Javascript
- **DOM manipulation** - Change content, elements, or styles on web pages
- **Events** - Listen for user and page events
- **Effects** - Like showing, hiding, or animating content
- **Data** - Get external or remote data from API using AJAX





---

## Write less, do more

These [codes](../../topics/jquery/demos/jquery-vs-vanilla.html) do the same thing, adding data to multiple elements on a page, yet jquery is much easier to write and less error prone.

Pure ("vanilla") Javascript

```js
var ele = document.getElementsByClassName('myClass'); // array of elements
for (var i = 0; i < ele.length; ++i) {
	var item = ele[i];
	item.innerHTML += ' 🤨 new data added via pure javascript)';
}
```

Javascript + jQuery

```js
$('.myClass').append(' 🎉 new data added with jquery library');
```



---

## Installation

Like many libraries, jquery can be installed with one line of code. You can [download](https://jquery.com/download/) it to your project, but a CDN is the simplest method (and [good for performance](https://jquery.com/download/#using-jquery-with-a-cdn)).

The [google hosted library](https://developers.google.com/speed/libraries#jquery) includes the `<script>` tags, making it easy to copy and paste.

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
// now you can use jquery!
</script>
```

For the same reason you add Javascript after the page elements have loaded, you can only use jquery functions ***after you import the library***.


---


## jQuery syntax

After you import the framework into the page and you can access jquery functions via `$`

jQuery uses CSS selectors to select and perform actions on elements. The syntax is:

```js
$(selector).action()
```

1. The `$` sign accesses jQuery library functions
1. The `(selector)` "queries" (or "finds") HTML elements
1. The `action()` to be performed on the element(s)


---


## jQuery examples

Classic CSS selectors

```js
$("p").hide() // hides all <p> elements.
```
```js
$(".test").hide() // hides all elements with class="test".
```
```js
$("#test").hide() // hides the element with id="test".
```

jquery can also use the `this` keyword to reference to the current element

```js
$(this).hide() // hides the current element.
```


---

## 👉 Try it out

1. Save this file [`jquery-demo.html`](../../topics/jquery/demos/jquery-demo.html) to your current class project
1. Install jquery using the Google hosted library [above](#installation)
1. Add this code to a `<script>` tag ***after*** you imported the library
    `$("h1").animate({left: '100%'}, "slow");`
1. Open your page in a web browser. If the title moves you are using jquery!







---

## Events

An **event** is "fired" when things happen on a page or a user does something.

For example, clicking or moving a mouse over an element, or selecting a radio button, can "trigger" an event the moment it occurs.

Here are some common DOM events:

- Mouse Events: `click`, `dblclick`, `mouseenter`, `mouseleave`
- Keyboard Events: `keypress`, `keydown`, `keyup`
- Form Events: `submit`, `change`, `focus`, `blur`
- Document/Window: `load`, `resize`, `scroll`, `unload`



---

## The document.ready() event

If you add your code to the end of your document, it is still possible some images will take longer than expected.

It's good to wait for the document to be fully loaded and ready before working with it.

👉 **Try it out** - Wrap your previous animate code with the document.ready() event

```js
$(document).ready(function(){
    $("h1").animate({left: '100%'}, "slow");
});
```
When an event is fired, the [**callback function**](https://www.w3schools.com/jquery/jquery_callback.asp) will **handle** the event.





---


## click() Event

The `click()` method ("function") attaches an **event handler** to an element, which is "fired" when the event happens.

👉 **Try it out**

Wrap your animate code in a click event listener and callback function

```js
$(document).ready(function(){
    $("button").click(function(){
        $("h1").animate({left: '100%'}, "slow");
    });
});
```

[More event examples](../../topics/jquery/demos/jquery-events.html)

---


## Method chaining

With jQuery, you can chain together actions/methods to run multiple methods on the same element in a single statement.


👉 **Try it out** - Chain `.css()` method to `.animate()`

```js
$(document).ready(function(){
    $("button").click(function(){
        $("h1").animate({left: '100%'}, "slow")
            .css("color", "red")
    });
});
```

<div class="caption">Note: whitespace doesn't matter when using chained methods.</div>




---

## val() method

Use `.val()` to [get or set data in a form element]((https://www.w3schools.com/jquery/jquery_dom_get.asp)).

👉 **Try it out**

```js
$(document).ready(function(){
    $("#myInput").val("hello world!"); // set data on ready() event
    $("button").click(function(){
        $("h1").animate({left: '100%'}, "slow")
            .css("color", "red")
        console.log("Value: " + $("#myInput").val()); // get data on click
    });
});
```










---


## What is AJAX?

AJAX, or Asynchronous JavaScript and XML, is a method for loading data in the background of web pages. The page doesn't refresh to show new data so it is great for:

- Single page applications (SPAs) (e.g. Gmail, Google Maps, Facebook)
- Data-driven pages (dashboards or visualizations, where data changes frequently)
- Fetching data from remote sources (like APIs)

jquery simplifies writing AJAX, providing [functions](https://www.w3schools.com/jquery/jquery_ref_ajax.asp) to load text, XML, or JSON using post (to submit data) or get (to request data) [methods](https://www.w3schools.com/tags/ref_httpmethods.asp).


---

## What is an API?

See this presentation for an introduction to APIs
https://omundy.github.io/learn-computing/slides/data-apis.html

---

## get() method

The $.get() method requests data from the server with an HTTP GET request. Syntax:

```js
$.get(URL,callback);
```

1. **URL** (required) specifies the path to request.
1. **callback** (optional) the function to be executed if the request succeeds.

```js
$("button").click(function(){
    $.get("https://www.boredapi.com/api/activity/", function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
});
```

<a href="../../topics/jquery/demos/jquery-ajax.html" target="_blank">See live example</a>

---

## AJAX notes

A few caveats and complications when it comes to using AJAX

1. CORS (Cross Origin Resource Sharing) ...
1. Loading data locally requires a server
1. Test with Postman to be sure API is actually working (lots of moving parts)





---

## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../README.md#javascript-part1).
1. Test your knowledge with the W3Schools [jquery quiz](https://www.w3schools.com/jquery/jquery_quiz.asp)



---


## Exercises

👉 **Try it out**

1. [Gradebook](../../topics/single-page-apps/grade-book/README.md) - Code a gradebook app using conditions, functions, and jquery.
1. Revisit [this lamp demo](../../topics/single-page-apps/javascript-lamp/index.html) to explore how it uses conditions.


---


## References
