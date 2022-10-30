<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Single Page Applications

A simple introduction

<span class="slides-small"><a href="slides.html">slides</a> | <a href="single-page-apps.md">md</a></span>

<!--
Presentation comments ...
-->




---

## Traditional websites

In a traditional approach to loading new content, users click on a hyperlink, leave the current page, and the browser loads an **entirely new page** (including all its resources).

![true](../../assets/img/javascript-spa-traditional-website.png)


---

## Single Page Applications

A single-page application (SPA) is a web app or website that dynamically rewrites the web page with new data from the server.

![true](../../assets/img/javascript-spa-single-page-app.png)






---

## Benefits

- The browser doesn’t have to load and re-render a brand new page for each new "view" because data loads asynchronously (in the background) to give users new content **faster**.
- These seamless transitions also make a website feel **more responsive** to input, like a native app.
- A web app with functionality that runs in the client is **easier** to host (you don't need a PHP server for app functions).




---

## Considerations

The main cons with SPAs are related to the fact they load data without changing the URL.

- To let users link directly to internal pages, developers can rewrite the url in the browser.
- If implemented correctly, the back button will also work.
- Search engines can't see content if it doesn't exist on a page. Not so much an issue with "apps"
- Site analytics have to be handled specific to the solution.



---

## 👉 Can you spot an SPA?

See if you can spot an SPA in the wild.

1. Find an example website that might be an SPA.
1. Does the content in the page
	1. change very quickly?
	1. change, yet the browser doesn't show a loading bar or "refresh state"?
1. See the next section for ways to test the site...


---

## 👉 Can you spot an SPA?

<div class="twocolumn">
<div class="col">

To test the example...

1. Open the Network tab in Dev Tools and browse the site.
1. Is content loading in the background through <a href="https://www.w3schools.com/xml/xml_http.asp" target="_blank">asynchronous XHR requests</a>?
1. See if you can identify "the stack" using the console or source code. Try using this tool: <a href="https://builtwith.com/" target="_blank">builtwith.com</a>

<details>
<summary>Solution</summary>

Popular examples: Facebook, Twitter, Gmail, Netflix, Trello, Google Maps, Google Drive

</details>

</div>
<div class="col">

<img width="80%" src="../../assets/img/console-spa-xhr.png">

</div>
</div>




---

## Frameworks

There are several frameworks for creating SPAs.

- <a href="https://angular.io/" target="_blank">Angular</a> (developed/used by Google)
- <a href="https://reactjs.org/" target="_blank">React</a> (developed/used by Facebook, Instagram, and WhatsApp)
- <a href="https://vuejs.org/" target="_blank">Vue.js</a> (developed by ex-Google employees)

Popular SPAs like Facebook and Google docs are complex to create and manage. That is why these frameworks are often developed to try to speed up their own projects.

Each of these libraries <a href="https://www.codeinwp.com/blog/angular-vs-vue-vs-react/" target="_blank">have benefits and drawbacks</a>. Angular and React are the most popular, but Vue is the easiest to learn.








---

## Simple SPA - Update specific text

- It is quite easy to tap into the benefits of an SPA with your own, simple solution.
- This [simple SPA](../../topics/single-page-apps/simple-spa/solution/index.html) uses JS objects for content in each page:

```js
var pages = {
    "home": {
        "title": "This is the home page",
        "content": "This is the content of the home page"
    },
    "about": {
        "title": "This is the about page",
        "content": "This is the content of the about page"
    },
    ...
};
```

---

## Simple SPA Chart - Update a section of the page

This [simple SPA chart](../../topics/single-page-apps/simple-spa-chart/solution/index.html) uses "views", or small sections of html pages

```html
<!-- contents of intro.html -->
<h1>Intro</h1>
```

...which are loaded dynamically into `div#main` of index.html.

```js
$("#main").load('views/intro.html');
```

Note: Since this page is changing by loading remote content, it (like most SPAs) must by run using a web server. How do you know when you are running on a server? Look at the protocol. If it is a `file://` then it is not. Look for `http://` or `https://` to see that your serving over the http protocol. See instructions to run a server on the next slide...



---

## How to start a web server

<div class="twocolumn2x1">
<div class="col">

To test the example...

1. Install Node using the [installer](https://nodejs.org/en/) or [Homebrew](https://formulae.brew.sh/formula/node) (Mac)
1. Install [serve package](https://www.npmjs.com/package/serve) globally:
	`npm install --global serve`
1. Change to your project directory `cd <directory>` and run `serve` to start the server.
1. Or specify which folder you want to serve:
	`serve <directory>`

</div>
<div class="col">

<img width="100%" src="../../assets/img/console-serve.png">

</div>
</div>


---

## More examples

Other simple examples that manage state / change views:

- [javascript-lamp](../../topics/single-page-apps/javascript-lamp/index.html)
- [games/gnome-dragger](../../topics/games/gnome-dragger/index.html)
- [games/bug-selector](../../topics/games/bug-selector/index.html)
- [quiz-simple](../../topics/single-page-apps/quiz-simple/index.html)



---

## Vue.js

<div class="twocolumn">
<div class="col">

- Vue ("view") is a JS framework for building user interfaces.
- It uses a component-based programming model and ...
- **Declarative Rendering** Vue extends standard HTML with a template syntax `{{ }}` to describe output from your program.
- **Reactivity** Vue automatically tracks and updates the DOM when your program state changes.

<a href="vue-hello/index.html" target="_blank">Open the Vue demo</a>

</div>
<div class="col">

```html
<script type="module">
import { createApp } from 'vue'

createApp({
	data() {
		return {
			title: "Hello world!",
			count: 0
		}
	}
}).mount('#app')
</script>
<div id="app">
	<h1>{{ title }}</h1>
	<button @click="count++">
		Count is: {{ count }}
	</button>
</div>
```

</div>
</div>






---

## Next steps

1. Complete the [Vue.js tutorial](https://vuejs.org/tutorial)
1. Start working on homework listed in the schedule.





---

## References

- [The pros and cons of single page applications (SPAs)](https://www.itechart.com/blog/pros-cons-of-single-page-applications/)
