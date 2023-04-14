<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a> <a href="../../"><img width="150" src="../../assets/img/logos/logo-node-ltgreen-150w.png"></a>

# Servers

Hosting a Javascript application, including security and production

<span class="slides-small"><a href="slides.html">slides</a> | <a href="servers.md">md</a></span>

<!--
Presentation comments ...
-->



---

## About Servers

An overview of hosting options for hosting a website built with node:

- Websites and APIs that require node to run continuously
    - Localhost - Test code locally, start server when needed. Not live.
    - Vercel.com - A good option for free, node (Express, Next, etc.) hosting (see below)
    - Shared hosting - Most of these will not let you run node 
    - VPS hosting - An affordable option. Use PM2 to keep server running (see below)
- Static websites (node was used in development to build static files)
    - Github Pages - You can host only static files here
    - React projects [must be built for production](https://create-react-app.dev/docs/production-build/)






---

## Host a node app on Vercel

1. Add a file `vercel.json` to your repo (see below)

```json
{
	"version": 2,
	"name": "YOUR_APP_NAME",
	"builds": [{
		"src": "./server.js",
		"use": "@vercel/node"
	}],
	"routes": [{
		"src": "/(.*)",
		"dest": "/server.js"
	}]
}
```

2. Export your main app 

```js
// server.js
var express = require('express');
var app = express();
// routers, parsers, middleware, start server ...
module.exports = app;
```

3. Continue with this tutorial: [Deploy Node.js application to Vercel in 5 minutes](https://dev.to/adafycheng/deploy-nodejs-application-to-vercel-in-5-minutes-171m)





---

## Running node on a server

Use [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) to monitor, manage, and restart your node/express app.





---

## Keep your passwords safe with .env

Before you add any passwords in you projects

1. Create a [.gitignore](http://toptal.com/developers/gitignore/api/node,macos,windows) file in you project root directory so you don't commit specific files to your repo.

```
node_modules
.DS_Store
.env
...
```

2. Create a .env (also in root) and add secure information (passwords, API keys, etc.)

```
DB_USER="admin"
DB_PASS="123456"
```

3. Install [dotenv](https://www.npmjs.com/package/dotenv) `npm install dotenv` then import the module (below). This loads variables from `.env` file. 

```js
// import package
require('dotenv').config()

// vars are now available
console.log(process.env.DB_USER)
```

4. (optional) Create a `.env.example` file with placeholder information so you can duplicate, rename, and then replace the values on your server
5. (optional) You will need to make a copy on your server (e.g. Vercel) with the correct contents. This also allows different (ahem, more secure) DB user/pass on your server vs. your localhost





