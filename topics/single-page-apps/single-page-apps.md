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

In a traditional approach to loading new content, users click on a hyperlink, leave the current page, and the browser loads an **entirely new page** (including all its resources).


---


## Single Page Applications

![true](../../assets/img/javascript-spa-single-page-app.png)

A single-page application (SPA) is a web app or website that dynamically rewrites the web page with new data from the server.






---


## Benefits

One big benefit of SPAs, is that you can build web applications that manage state and run in the client. This makes an app much easier to host, as you don't need a server that can run PHP, Node, etc. to perform the functions of your app.

Another bonus is speed:

- Data can load asynchronously (in the background) to give users new content faster.
- The browser doesn’t have to load and re-render a brand new page.
- These seamless transitions also make a website feel more responsive to input, like a native app.




---

## Considerations

The main cons with SPAs are related to the fact they load data without changing the URL.

- To let users link directly to internal pages, developers can rewrite the url in the browser.
- If implemented correctly, the back button will also work.
- Search engines can't see content if it doesn't exist on a page. Not so much an issue with "apps"
- Site analytics have to be handled specific to the solution.


---


## Frameworks

There are several frameworks for generating SPAs.

Companies like Facebook are usually the drivers of the apps used to make SPAs:

- Angular (developed/used by Google)
- Vue (developed by ex-Google employees)
- [React](https://reactjs.org/) (developed/used by Facebook, Instagram, and WhatsApp)

[Angular vs React vs Vue: Which Framework to Choose](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/)

Take for example a massive scrolling page like the Facebook feed. With so much going on in the page it makes sense to speed up the fetching of resources any way possible.





---

## Simple SPA - Update specific text

It is quite easy to tap into the benefits of an SPA with simpler solutions.

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

Other simple examples that manage state / change views:

- [javascript-lamp](../../topics/single-page-apps/javascript-lamp/index.html)
- [games/gnome-dragger](../../topics/games/gnome-dragger/index.html)
- [games/bug-selector](../../topics/games/bug-selector/index.html)
- [quiz-simple](../../topics/single-page-apps/quiz-simple/index.html)





---


## Can you spot one?

Think of an example website that might be an SPA to see if you can spot one:

1. Does the content in the page change very quickly?
1. Do text, images, or sections of the page change without the browser showing a loading bar or "refresh state", or changing the scroll bar position?


---


## Can you spot one?

To test the example, open the Network tab in Dev Tools and browse the site. Are small bits of content loading in the background through [asynchronous XHR requests](https://www.w3schools.com/xml/xml_http.asp)?

![true](../../assets/img/console-spa-xhr.png)


---

## References

- [The pros and cons of single page applications (SPAs)](https://www.itechart.com/blog/pros-cons-of-single-page-applications/)
