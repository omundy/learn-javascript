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


## Host a node app on Vercel

Add a file `vercel.json` to your repo and follow this tutorial: [Deploy Node.js application to Vercel in 5 minutes](https://dev.to/adafycheng/deploy-nodejs-application-to-vercel-in-5-minutes-171m)

```json
{
	"version": 2,
	"name": "YOUR_APP_NAME",
	"builds": [{
		"src": "./MAIN_JS_FILE.js",
		"use": "@vercel/node"
	}],
	"routes": [{
		"src": "/(.*)",
		"dest": "/MAIN_JS_FILE.js"
	}]
}
```




---

## Running node on a server

Use pm2 to restart
