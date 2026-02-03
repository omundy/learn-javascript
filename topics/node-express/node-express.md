<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a> <a href="../../"><img width="150" src="../../assets/img/logos/logo-node-ltgreen-150w.png"></a> <a href="../../"><img width="150" src="../../assets/img/logos/logo-express-200w.png"></a>

# Node & Express 

Introduction to Node + Express

<span class="slides-small"><a href="slides.html">slides</a> | <a href="node-express.md">md</a></span>

<!--
Presentation comments ...
-->





---

## About Express

- Express is a Node.js framework for creating web applications
- It provides several built in tools for creating backends and APIs
- You could write all this from scratch in JS, but Express simplifies much of the work to create endpoints and link components for full-stack applications


---

## Express Basics

👉 The following steps walk through a simple Express site 

Source: [Express > Getting started](https://expressjs.com/en/starter/installing.html)










---

## 👉 Install Express 

1. Create project folder named `express-site` and open it in VS Code
1. Run below commands

```bash
# initialize npm; Change type to "module"
npm init

# install express
npm install express --save 

# add index file
touch index.js

# run the project and restart on changes (press Ctl-C to terminate)
nodemon
```







---

## 👉 Express Hello World

1. In `index.js` import express, create app and route, and start server. 
1. Save and open: http://localhost:3000

```js 
import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
	res.send('Hello from Express!');
});
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
```


<details class="caption slides-small">
<summary>References</summary>

- [Getting started > Hello world example](https://expressjs.com/en/starter/hello-world.html)
- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch3 Saving Time with Express (21-30) & Ch4 Tidying Up (31–39)
- Require `const express = require('express');` is for non-module based projects. While this method `import express from 'express';` means you need to use `type: module` in package.json

</details>





---

## Basic routing

👉 Add these routes with new [HTTP methods](https://www.w3schools.com/tags/ref_httpmethods.asp) and endpoints. Test them with [Postman](https://www.postman.com/)

```js
// the same endpoint as above with POST
app.post('/', (req, res) => {
	res.send('Got a POST request')
})
// an "API" is simply an endpoint + JSON response
app.get('/api', (req, res) => {
	res.json({"message": "Hello, world!"})
})
```

<details class="caption slides-small">
<summary>References</summary>

Source: [Getting started > Basic routing](https://expressjs.com/en/starter/basic-routing.html)

</details>






---

## Middleware 

<div class="twocolumn1x2">
<div class="col">

- Add a function to the application request-response cycle
- It should have `(req,res,next)` parameters and call `next()` at the end to go to the next function in the stack.

</div>
<div class="col">

👉 Add this after you create the app()

```js
// log the url
let logger = (req,res,next) => {
	console.log(`url: ${req.url}`)		
	next() // continue call stack
}

// add middleware to each request
app.use (logger);
```

</div>
</div>

<details class="caption slides-small">
<summary>References</summary>

- [Guide > Writing middleware](https://expressjs.com/en/guide/writing-middleware.html)
- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch10 Middleware (113-120)

</details>






---

## Middleware 

<div class="twocolumn1x2">
<div class="col">

Also add middleware to any endpoint by including the name as a parameter in the route.

</div>
<div class="col">



```js
// check if user is logged in
let auth = (req,res,next) => {
	if (true) // authentication check
		return next(); // continue call stack
	// redirect to signin page	
	res.redirect('/signin');
}

// add middleware to this request only 
app.get('/dashboard', auth, (req, res) => {
	res.send('Hello Admin!')
})
```

</div>
</div>


<details class="caption slides-small">
<summary>References</summary>

- [Guide > Writing middleware](https://expressjs.com/en/guide/writing-middleware.html)
- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch10 Middleware (113-120)

</details>






---

## 👉 Static files

To serve static files (images, CSS, client-side JS), use the `express.static` middleware built-into Express.

1. Create a `public` directory
1. Add the following after creating the app()

```js
// make all files inside /public available using static
import path from "path";
import { URL } from "url";
const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
app.use(express.static(path.join(__dirname, './public')));
```

<!-- 
OTHER EXAMPLES 
// serve static files from project root; /public => foo.com/
app.use(express.static('public'))
const path = require('path');
// serve files from working dir; ./public => foo.com/
app.use(express.static(path.join(__dirname, 'public')));
// serve files *as folder* from wd; ./uploads => foo.com/uploads
app.use('/uploads', express.static(path.resolve('./uploads'))); 
-->



<details class="caption slides-small">
<summary>References</summary>

- [Getting started > Static files](https://expressjs.com/en/starter/static-files.html)
- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch17 Static Content (215-221)

</details>







---

## 👉 Organize routes into a separate file



<div class="twocolumn">
<div class="col">

Make a new file called `route.js` and add...

```js
// routes.js

// import express, create router
import express from 'express';
const router = express.Router();

// move routes from index.js here
// ...

// export module
export default router;
```


</div>
<div class="col">


Replace routes in index.js with...

```js
// index.js

// import file for routes
import router from './routes.js';
app.use('/', router);
```


</div>
</div>




---

## Tutorial

So far we've been create a test API from scratch. Now that you know the basics, continue this tutorial to work with a more complete project.
https://criticalwebdesign.github.io/wiki/chapter-09/9-4-bad-password-api/ 






<!-- 
---

## Express application generator

👉 Generate a new app (see `express -h` for options)

```bash
# generate a new express project in a new directory, using handlebars
npx express-generator --view=hbs myapp
# change into it
cd myapp
# install dependencies
npm install
# start "myapp" (see package.json), tell node to turn on logging
DEBUG=myapp:* npm start
```

*Note you can also [use handlebars for frontend](https://www.codecademy.com/learn/learn-handlebars/modules/templating-with-handlebars/cheatsheet)




> The app structure created by the generator is just one of many ways to structure Express apps. Feel free to use this structure or modify it to best suit your needs.

<details class="caption slides-small">
<summary>References</summary>

Source: [Getting started > Express application generator](https://expressjs.com/en/starter/generator.html)

</details>

 -->




<!-- 

---

## Use modules for organization

```js

```

<details class="caption slides-small">
<summary>References</summary>

- w3schools [modules](https://www.w3schools.com/nodejs/nodejs_modules.asp), [http module](https://www.w3schools.com/nodejs/nodejs_http.asp), [file system module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp), [url module](https://www.w3schools.com/nodejs/nodejs_url.asp)

</details>






---

## Testing

**Overview**: How to use linters and write unit and integration tests

```js
// 1. add and use custom module
const fortune = require('./lib/fortune');
app.get('/about', (req, res) => {
	res.render('about', { fortune: fortune.getFortune() });
});

// 2.
```

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/):
	- Ch5 Quality Assurance (41–58)
- Exercise: Add testing to Meadowlark Website




---

## Requests and Templating

**Overview**: How to ... Express request, response, Handlebars, MVC

```js
const tours = [
	{ id: 0, name: 'Hood River', price: 99.99 },
	{ id: 1, name: 'Oregon Coast', price: 149.95 },
];
app.get ('/api/tours', (req, res) => res.json(tours));
```

- Lecture: [Node, Express, Handlebars, Heroku - Part 1 - Set up a node express project template
](https://docs.google.com/presentation/d/17bIeMMJnZQy-tb3GLhMC3JuTfcgMEOqnK4WsCt52CLM/edit#slide=id.gafb807d421_0_39)
- Demo: [omundy/sample-node-express-cat-api](https://github.com/omundy/sample-node-express-cat-api) and ~~[live demo](https://sample-node-express-template.herokuapp.com/)~~


#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch6 Request and Response (59-72)
	- Ch7 Templating with Handlebars (73-88)





---

## Forms and Sessions

**Overview**: How to ... Express web forms, sessions

```js
app.get ( '/newsletter', handlers.newsletter );
app.post ( '/api/newsletter-signup', handlers.api.newsletterSignup );
```

- Lecture: [Node, Express, Handlebars, Heroku - Part 2 - Use API data, add a frontend](https://docs.google.com/presentation/d/17bIeMMJnZQy-tb3GLhMC3JuTfcgMEOqnK4WsCt52CLM/edit#slide=id.gbcac1199e9_0_15)
- Demo: [omundy/sample-node-express-username-generator](https://github.com/omundy/sample-node-express-username-generator) and [live demo](https://sample-node-express-username.herokuapp.com/)

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch8 Form Handling (89-100) & Ch9 Cookies and Sessions (103-112)










---

![node logo](../../assets/img/logos/logo-node-ltgreen-75w.png) &nbsp; ![express logo](../../assets/img/logos/logo-express-200w.png)

# Node Express Part.2
Using Node, Express for server-side, desktop, and mobile application development



---

## Express and databases

**Overview**: How to ...

```js
const mongoose = require ( 'mongoose' );
const { connectionString } = credentials.mongo;
mongoose.connect ( connectionString );

```



#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch13 Persistence (147-172)

#### Review

- [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), [Revealing Module](https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2#file-revealing-module-pattern-md), and other [Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)






---

## Advanced routing


```js
app.get ( '/user(name)?', ( req, res ) => res.render ( 'user' ));
app.get ( '/staff/:name', ( req, res ) => {
	const info = staff [ req.params.name ];
	if ( !info ) return next (); // will eventually fall through to 404
	res.render ( 'staff', info );
});
```

<details class="caption slides-small">
<summary>References</summary>

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch14 Routing (173-184) & Ch15 REST APIs and JSON (185-192)

</details>










---

## Express SPAs

**Overview**: How to ...

```js
import React from 'react';

// ...
```


<details class="caption slides-small">
<summary>References</summary>

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch16 Single-Page Applications (193-212)

</details>



---

## Production

<details class="caption slides-small">
<summary>References</summary>

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch11 Sending Email (121-131) & Ch12 Production Concerns (133-145)

</details>




---

## Express security, APIs

**Overview**: How to ...

```js
const passport = require ( 'passport' );
const db = require ( '../db' );

// ...
```


#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch18 Security (223-248)
	- Ch19 Third Party APIs (249-263)







---

## Express debugging, production

**Overview**: How to ...

```bash
node inspect index.js
```

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch20 Debugging (265-275)
	- Ch21 Going Live (277-288) - https://heroku.com/
	- Ch22 Maintenance (291-300) -->
