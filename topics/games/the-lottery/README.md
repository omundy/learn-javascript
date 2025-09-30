
# The Lottery (game)

This exercise incorporates variables, conditionals, functions, event listeners, and HTML DOM manipulation using pure ("vanilla") Javascript.



## Instructions

The following prompt to create a lottery game follows a typical app development process. 

1. Fork the template [on codepen.io](https://codepen.io/owenmundy/pen/ZEoyMGw?editors=1011) or copy [the file](the-lottery-v0.html)
1. Start by building the simple prototype (`v.1`) containing the core logic or proof of concept of the program, then add the interface and features in each successive version. 
1. Try to code each version by only looking at the interface and Javascript console, but not the actual source code.
1. You can use MDN docs, Google, class notes, etc.


## Versions

1. [Lottery v.1](https://omundy.github.io/learn-javascript/topics/games/the-lottery/the-lottery-v1.html)
	- Intro to [conditionals](../../control-flow/slides.html) and `Math.random()`
	- Use `console.log()` to display results in the console
1. [Lottery v.2](https://omundy.github.io/learn-javascript/topics/games/the-lottery/the-lottery-v2.html)
	- For user input, first [select the button](../../dom/slides.html) `var button = document.querySelector("button")`
	- Then add an event listener `button.addEventListener(function() { /* code */ }))`
	- You should be able to play the game with the button and see results in the console
1. [Lottery v.3](https://omundy.github.io/learn-javascript/topics/games/the-lottery/the-lottery-v3.html)
	- Update elements in the page via the [DOM](../../dom/slides.html) Javascript
	- Display all results within the HTML of the page
1. [Lottery v.4](https://omundy.github.io/learn-javascript/topics/games/the-lottery/the-lottery-v4.html)
	- Use [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get data from an API to somehow "seed" the randomness in your lottery game.
    - Add a section of "behind the curtain" controls to manipulate the odds of the game (mwah hah hah!)
