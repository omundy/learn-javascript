
← [Learn Javascript](../../README.md)

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a> <a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-jquery-240sq.png"></a>

# jquery

How to use jquery for interaction, display, and data


## Contents

1. [Introduction](#introduction)

1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references)


## Introduction

Review the following sections and perform the activities on your own or with your group.

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

- jquery is a library that reduces the complexity of using Javascript with HTML.
- The goal is to "write less, do more" including:
    - Write to web pages to change content, elements, or styles - HTML/CSS/DOM manipulation
    - Listen for user and page events
    - Add effects like showing, hiding, or animating content
    - Can get external or remote data from API using AJAX (asynchronous Javascript)
    - Fix cross browser issues




## Installation

Like many frameworks, jquery can be installed with one line of code. You can [download](https://jquery.com/download/) the file to your project, [install it with NPM](https://jquery.com/download/#downloading-jquery-using-npm-or-yarn), or [link to a CDN](https://jquery.com/download/#using-jquery-with-a-cdn).

> CDNs can offer a performance benefit by hosting jQuery on servers spread across the globe. This also offers an advantage that if the visitor to your webpage has already downloaded a copy of jQuery from the same CDN, it won't have to be re-downloaded.

After you import the framework into the page and you can access jquery functions via $



```js
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
// now you can use jquery!

// select all divs, set backgrounds red
$('div').css({ 'background': 'red' });


</script>
```


## document.ready()

For the same reason you add Javascript after the page elements have loaded, you can only use jquery functions after you import the library.





## Selectors

Anytime







## Selecting classes

These [samples](demos/1-dom-vanilla-vs-jquery.html) do the same thing, adding data to multiple elements on a page, yet the jquery version is much easier to write and less error prone.



Pure Javascript

```js
var ele = document.getElementsByClassName('myClass'); // array of elements
for (var i = 0; i < ele.length; ++i) {
	var item = ele[i];
	item.innerHTML += ' ++ new data (pure js)';
}
```

Javascript + jQuery

```js
$('.myClass').append(' ## new data (jquery)');
```













## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../README.md#javascript-part1).




## Exercises

👉 **Try it out**

1. [Gradebook](../../topics/single-page-apps/grade-book/README.md) - Code a gradebook app using conditions, functions, and jquery.
1. Revisit [this lamp demo](../../topics/single-page-apps/javascript-lamp/index.html) to explore how it uses conditions.


## References
