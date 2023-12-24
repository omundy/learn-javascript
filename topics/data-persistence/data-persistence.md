<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Javascript – Data Persistence

How to save, update, and display dynamic data.




---

## What is data persistence?

Data persistence describes storing/using data beyond the life of a program (or web page). For example:

1. Add text to file, save it to your computer, and you can ***view it again*** later.
1. A mobile app (e.g. Instagram) ***remembers you*** have already logged in.
1. Use a website (e.g. Wordpress) to post text on the internet for ***others to see***.

The technologies may change, but the concept does not—the software allows information to persist as part of its function, security, or customization.



---

## Methods

In most examples, these software actually saves data in multiple locations:

Software | Data on PC | Data in client | Data on network
--- | --- | --- | ---
TextEdit | Text files to hard drive | Settings in `~/Library/Preferences/` | Files in the cloud
Instagram mobile app | Edited photos in your library | Stores preferences and user authentication | Text in database, images on server via API
Google Docs | Saves files for offline use | Stores authentication (cookies) in browser | Text in database, images on server





---

## Client-side storage

Javascript in a browser can persist data in a browser in many ways:

1. **Cookies** - A small piece of data stored in the browser.
1. **Web-based storage APIs** (localStorage and sessionStorage)
1. **Cache** - web browsers store copies of files locally in a **cache** so websites load faster.

Node.js (run-time Javascript) can write data directly to the hard drive.




---

## Cookies

- Cookies can store any string of text (user preferences, inputs, or authentication information) to customize a web experience.
- A user can set their web browser to accept, reject, or delete cookies.
- Cookies can be set and modified at the server level using the Set-Cookie HTTP header, or with JavaScript using document.cookie.

👉 Run these and look in the DevTools > Application. See MDN for more on [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

```js
document.cookie = "name=jane";
document.cookie = "message=hello, world!";
console.log(document.cookie);
//-> "name=jane; message=hello, world!"
```

- An example: https://stickyscreen.org 



---

## LocalStorage

The Web Storage API allows you to store simple name/value pairs of data and retrieve these values when needed. 

👉 Run these and look in the DevTools > Application

```js
localStorage.setItem('location','Davidson College');
let location = localStorage.getItem("location");
console.log(location) //-> "Davidson College"
```

See this [codepen](https://codepen.io/owenmundy/pen/GRzOpNv) to store an array or object with `JSON.stringify()` 
See MDN for more on [Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)










---

## Other client-side storage options

When you create an app that runs on its own (outside of a web browser) you have many additional options for storing data in the client.
- For example, a mobile app has access to native features on the phone or device



---

## Persisting data online

To save data for the world to see you need to run code on a server* like `PHP` or `Node`:

- **Read/Write files to disk** (simple, not performant) like `txt`, `json`, or `csv` 
- **Use a web service** to save data in a database 
    - [MongoDB's Atlas](https://www.mongodb.com/atlas/database)
    - [firebase.google.com](https://firebase.google.com/)
    - [remotemysql.com](https://remotemysql.com/) and [freedb.tech](https://freedb.tech/)
- **Create your own server application using a database** (MySQL, SQLite, MongoDb, etc.). This can be done a number of ways:
    - <s>($)</s> Cloud-hosting services like [Glitch](https://glitch.com/) or [Vercel](https://vercel.com/) - [ai-candy-hearts-api](https://ai-candy-hearts-api.vercel.app) (Node)
    - ($) Shared servers (e.g. Davidson Domains) - [Term vs. Term](https://owenmundy.com/work/term-vs-term/) (PHP)
    - ($$) VDS (Virtual Dedicated Servers) - [I Know Where Your Cat Lives](https://iknowwhereyourcatlives.com) (PHP/MySQL)

<div class="caption slides-small">
	*Github Pages cannot run server-side scripts
</div>

