
← [Learn Javascript](../README.md)

# NPM, Node





#### Upgrade packages in your repository

[npm-upgrade](https://www.npmjs.com/package/npm-upgrade)
```js
npm i -g npm-upgrade
```









&nbsp;

<!---
comments
-->

![node logo](assets/img/logos/logo-node-ltgreen-75w.png) &nbsp; ![express logo](assets/img/logos/logo-express-200w.png)

# Node Express Part.1
Introduction to Node and Express






&nbsp;
<!---
comments
-->
## Node Installation

**Overview**: How to install node and npm on your machine. There are three ways, I recommend #2

1. Use an [installer via node website](https://nodejs.org/en/download/). **Not recommended** because it is difficult to upgrade.
1. Installing using a system package manager (below) gives you flexibility to update or change versions later.
1. Installing using [nvm](https://github.com/nvm-sh/nvm) is the most flexible method but potentially adds complexity for new users.

**Mac** - Install [homebrew](https://brew.sh/) (Mac package manager), then [node](https://formulae.brew.sh/formula/node)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

**Windows** - Install [chocolatey](https://chocolatey.org/) (Windows package manager) using [these instructions](https://www.youtube.com/watch?v=KTUO1g_Btfk&ab_channel=SonarSystems)

```bash
choco install nodejs
```

#### After node is installed

```bash
node -v                    # check node version
npm -v                     # check npm version
npm install -g nodemon     # install nodemon globally, auto-restart projects on file change
```


- Lecture: [DIG 245 Review](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_58), [Web Applications](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_22), [Node Introduction](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_27), [Node Installation](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_236), [Asynchronous Programming](https://docs.google.com/document/d/1-vxKtmWfCSOVyUeqG3tcw-lry6aBttONk6UPF2PBOzI/edit#slide=id.gafb807d421_0_247)
- Demo: Install node, confirm version #

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/):
	- Ch1 Introducing Express (1-9)
	- Ch2 Getting Started with Node (11-20)

#### Review
- w3schools [nodejs](https://www.w3schools.com/nodejs/default.asp), [intro](https://www.w3schools.com/nodejs/default.asp), [command line](https://www.w3schools.com/nodejs/nodejs_get_started.asp), [npm](https://www.w3schools.com/nodejs/nodejs_npm.asp)





&nbsp;
<!---
comments
-->
## Node Express Introduction

**Overview**: How to get started with node and express

Setup your project
```bash
mkdir express-site && cd express-site  # make a new directory and move to it
npm init                               # create a node project in the new directory
npm install express                    # install express
```

```js
// import package
const express = require('express');
// create express app
const app = express();
// set port either from env file or default
const port = process.env.PORT || 3000;
// add routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});
// start server and listen on <port>
app.listen(port, () => console.log(
	`Express started on http://localhost:${port}; press Ctrl-C to terminate.`
));
```

- Lecture: [Node Express Introduction](https://docs.google.com/presentation/d/17bIeMMJnZQy-tb3GLhMC3JuTfcgMEOqnK4WsCt52CLM/edit#slide=id.gafb807d421_0_33)
- Demo:
- Exercise: Start homework...


#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/):
	- Ch3 Saving Time with Express (21-30)
	- Ch4 Tidying Up (31–39)
- Exercise: Begin Meadowlark Website

#### Review

- Codecademy Cheatsheet(s) [node introduction](reference-sheets/node-01-introduction.pdf)
- w3schools [modules](https://www.w3schools.com/nodejs/nodejs_modules.asp), [http module](https://www.w3schools.com/nodejs/nodejs_http.asp), [file system module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp), [url module](https://www.w3schools.com/nodejs/nodejs_url.asp)
- Express [hello world](https://expressjs.com/en/starter/hello-world.html), [basic routing](https://expressjs.com/en/starter/basic-routing.html), [static files](https://expressjs.com/en/starter/static-files.html)

**Assessment**: Homework review









&nbsp;
<!---
comments
-->
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

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/):
	- Ch5 Quality Assurance (41–58)
- Exercise: Add testing to Meadowlark Website

#### Review


**Assessment**: Homework review








&nbsp;
<!---
comments
-->
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
- Demo: [omundy/sample-node-express-template](https://github.com/omundy/sample-node-express-template) and [live demo](https://sample-node-express-template.herokuapp.com/)


#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch6 Request and Response (59-72)
	- Ch7 Templating with Handlebars (73-88)

#### Review

- APIs


**Assessment**: Homework review






&nbsp;
<!---
comments
-->
## Forms and Sessions

**Overview**: How to ... Express web forms, sessions

```js
app.get ( '/newsletter', handlers.newsletter );
app.post ( '/api/newsletter-signup', handlers.api.newsletterSignup );
```

- Lecture: [Node, Express, Handlebars, Heroku - Part 2 - Use API data, add a frontend](https://docs.google.com/presentation/d/17bIeMMJnZQy-tb3GLhMC3JuTfcgMEOqnK4WsCt52CLM/edit#slide=id.gbcac1199e9_0_15)
- Demo: [omundy/sample-node-express-username-generator](https://github.com/omundy/sample-node-express-username-generator) and [live demo](https://sample-node-express-username.herokuapp.com/)

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch8 Form Handling (89-100)
	- Ch9 Cookies and Sessions (103-112)

#### Review

**Assessment**: Homework review







&nbsp;
<!---
comments
-->
## Middleware and Production

**Overview**: How to use middleware, send email, PM2

```js
app.use (( req, res, next ) => {
	console.log ( `processing request for ${ req.url } ....` );
	next ();
});

```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch10 Middleware (113-120)
	- Ch11 Sending Email (121-131)
	- Ch12 Production Concerns (133-145)

#### Review

**Assessment**: Homework review









&nbsp;

<!---
comments
-->

![node logo](assets/img/logos/logo-node-ltgreen-75w.png) &nbsp; ![express logo](assets/img/logos/logo-express-200w.png)

# Node Express Part.2
Using Node, Express for server-side, desktop, and mobile application development





&nbsp;
<!---
comments
-->
## Express and databases

**Overview**: How to ...

```js
const mongoose = require ( 'mongoose' );
const { connectionString } = credentials.mongo;
mongoose.connect ( connectionString );

```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch13 Persistence (147-172)

#### Review

- [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), [Revealing Module](https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2#file-revealing-module-pattern-md), and other [Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

**Assessment**: Homework review






&nbsp;
<!---
comments
-->
## Express routes, APIs, JSON

**Overview**: How to ...

```js
app.get ( '/user(name)?', ( req, res ) => res.render ( 'user' ));
app.get ( '/staff/:name', ( req, res ) => {
	const info = staff [ req.params.name ];
	if ( !info ) return next (); // will eventually fall through to 404
	res.render ( 'staff', info );
});


```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch14 Routing (173-184)
	- Ch15 REST APIs and JSON (185-192)

#### Review

**Assessment**: Homework review




&nbsp;
<!---
comments
-->
## Express SPAs, static content

**Overview**: How to ...

```js
import React from 'react';

// ...
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch16 Single-Page Applications (193-212)
	- Ch17 Static Content (215-221)

#### Review

**Assessment**: Homework review





&nbsp;
<!---
comments
-->
## Express security, APIs

**Overview**: How to ...

```js
const passport = require ( 'passport' );
const db = require ( '../db' );

// ...
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch18 Security (223-248)
	- Ch19 Third Party APIs (249-263)

#### Review

**Assessment**: Homework review





&nbsp;
<!---
comments
-->
## Express debugging, production

**Overview**: How to ...

```bash
node inspect index.js
```

<!--
- Lecture:
- Demo:
- Exercise:
-->

#### Homework

- [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/)
	- Ch20 Debugging (265-275)
	- Ch21 Going Live (277-288) - https://heroku.com/
	- Ch22 Maintenance (291-300)

#### Review


**Assessment**: Homework review
