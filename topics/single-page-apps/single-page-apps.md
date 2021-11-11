<!-- paginate: true -->

← [Learn Javascript](../../README.md)

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Single Page Applications

A simple introduction

<sup class="small"><a href="../../slides/single-page-apps/single-page-apps.html">slides</a> | <a href="../../topics/single-page-apps/single-page-apps.md">markdown</a> </sup>


<!--
Presentation comments ...
-->

<!--
---


## Contents

1. [Introduction](#introduction)

1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references) -->


---


## Traditional websites

![true](../../assets/img/javascript-spa-traditional-website.png)

In a traditional approach to loading new content, when a user clicks on a hyperlink they leave the current page and the browser loads an **entirely new page** (including all of its resources).


---


## Single Page Applications

![true](../../assets/img/javascript-spa-single-page-app.png)

A single-page application (SPA) is a web application or website that dynamically rewrites the web page with new data from the server.






---


## Benefits

One benefit of an SPA is speed, because it gives users faster transitions to new information. The data is loaded in the background and the browser doesn’t have to load a brand new page. This also makes the website feel more responsive to input, like a native app.




---

## Simple SPA - Update specific text

This [simple SPA](../../topics/single-page-apps/simple-spa/solution/index.html) uses a Javascript object to store and update specific content inside the page:

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



---

## More examples


- [javascript-lamp](../../topics/single-page-apps/javascript-lamp/index.html)
- [games/gnome-dragger](../../topics/games/gnome-dragger/index.html)
- [games/bug-selector](../../topics/games/bug-selector/index.html)
