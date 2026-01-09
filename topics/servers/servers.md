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

## Server options


<small>

Web host | Static | Dynamic | Node | PHP | Python | database | .env | Live | Cost
--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---
Github Pages   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | free 
Localhost      | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | free
Shared host | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | $
VPS hosting    | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | $$
~~[glitch.com ](https://glitch.com/)~~ | ✅ | ✅ | ✅ | ❌ |  ? |✅ | [✅](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) | ✅ | free(mium)
[vercel.com ](https://vercel.com) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |free(mium)



Add data from 
http://localhost:4321/wiki/chapter-09/9-4-bad-password-api/#publish-a-full-stack-website



Others
https://codepen.io/
https://codesandbox.io/

    Consider mentioning CodeSandbox 
    https://codesandbox.io/p/devbox/node-hello-878r6d
    https://878r6d-8080.csb.app/


https://stackblitz.com/

https://medium.com/paperplanetechworks/8-best-sites-to-host-backend-code-for-free-in-2023-c66b2512051a


Notes: Databases require PHP or node. React or Next projects [can be built for static](https://create-react-app.dev/docs/production-build/)

</small>





---

## Host a node app on Vercel


<!-- Note: Update these in the future to https://criticalwebdesign.github.io/wiki/chapter-09/9-4-bad-password-api/ -->

<div class="twocolumn">
<div class="col">

1. Add a `vercel.json` file

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

</div>
<div class="col">

2. Export your application 

```js
// server.js
var express = require('express');
var app = express();
// routers
// middleware
// start server
// finally ...
module.exports = app;
```

3. Continue with this tutorial: [Deploy Node.js application to Vercel](https://dev.to/adafycheng/deploy-nodejs-application-to-vercel-in-5-minutes-171m)

</div>
</div>








---

## Running node on a server

Use [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) to monitor, manage, and restart your node/express app.





---

## Securing information

Never commit secure information (database passwords, API keys, etc.) to git.

1. Use `.gitignore` to prevent adding secure files to git
2. If the secret information is required for your project then you will also need to add the secret file to your server

See below for tutorials.


---

## Securing information with .gitignore

<div class="twocolumn">
<div class="col">

1. Create a new file for the secret information. 

```js
// secure.js
let key = 12345;
```

2. Import the file (before your other code!)

```html
<!-- index.html -->
<script src="secure.js"></script>
<script>console.log(key)</script>  
```

</div>
<div class="col">

3. Create a `.gitignore` file in the root of your project. Add the name of the secret file on a new line.

```bash
# .gitignore
passwords.js
```

4. Commit the `.gitignore` file and then git will not track the file containing your secret information.

<small>*Your file will only run on your computer</small>

</div>
</div>





---

## Keep your passwords safe with .env

<div class="twocolumn">
<div class="col">

1. Create a `.env` in the project root and add secure information

```
USER="admin"
PASS="123456"
```


2. Create a [.gitignore](http://toptal.com/developers/gitignore) file in your project root. Add the `.env`. 

```
node_modules
.DS_Store
.env
```

</div>
<div class="col">

3. Install [dotenv](https://www.npmjs.com/package/dotenv) 

```js
npm install dotenv
``` 


4. Import the dotenv module, which loads variables from `.env` file. 

```js
// import package
require('dotenv').config()
// vars are now available
console.log(process.env.USER)
```

</div>
</div>


---

## Keep your passwords safe with .env (part 2)

5. `(optional)` Make a copy of the file to your server (e.g. Vercel) with the correct contents. This also allows different (ahem, more secure) DB user/pass on your server vs. your localhost
6. `(optional)` Create a `.env.example` file with placeholder information so you can duplicate, rename, and then replace the values on your server






