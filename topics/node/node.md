<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a> <a href="../../"><img width="150" src="../../assets/img/logos/logo-node-ltgreen-150w.png"></a>

# NPM & Node

Introduction to NPM and Node

<span class="slides-small"><a href="slides.html">slides</a> | <a href="node.md">md</a></span>

<!--
Presentation comments ...
-->


---

## About Node

- Node.js is Javascript for the command line.
- Use Node to create web servers, APIs, database-driven websites, standalone software, and much more.
- NPM (Node Package Manager) to install, manage, and incorporate open source software packages (dependencies) in your projects.


---

## Node Installation

There are several ways to install Node (which includes NPM) on your machine (starting with the easiest)

1. Use an [installer via node website](https://nodejs.org/en/download/) (fastest, but difficult to upgrade).
1. Use a system package manager like Homebrew or Scoop (this makes it easy to upgrade)
1. Use [nvm](https://github.com/nvm-sh/nvm) (the most flexible method but potentially adds complexity for new users).

For my students, I recommend #2. Choose your OS and install Node below.





---

## 👉 Install Node & NPM using Homebrew (Mac)

1. Install [Homebrew](https://brew.sh/) (Mac package manager) using their instructions
2. Install [Node](https://formulae.brew.sh/formula/node)

```bash
brew install node
```


---

## 👉 Install Node & NPM using Scoop (Windows)

1. Install [Scoop](https://scoop.sh/) (Windows package manager) using their instructions
2. Install [Node](https://scoop.sh/#/apps?q=nodejs&s=0&d=1&o=true)

```bash
scoop install nodejs
```





---

## 👉 Confirm your Node version

Run these to make sure that Node installed correctly:

```bash
node -v                    # check node version
npm -v                     # check npm version
```




---

## 👉 Open Node interactive shell

Node is just Javascript, so almost any code will run.

1. Type `node` on the command line and press return to open the interactive shell. 
1. At the `>` prompt, type `1+1` and press return. Node will evaluate your expression and return the result.

```bash
> 1+1
2
```



---

## 👉 Run a script with Node

1. Create a new folder named: `cron-demo` and open it in VS Code (in Mac you can just drag the folder from the finder to the VS Code icon in the dock)
2. Create a file in this folder named `index.js` and paste the below code.

```js
let greeting = "Hello, from Node";
console.log(greeting);
```

3. In the Terminal, run* the script with `node index.js`

*The name `index.js` is arbitrary. Other names like `server.js` and `app.js` are also popular for different use cases.



---

## 👉 Run a script with Nodemon

[Nodemon](https://www.npmjs.com/package/nodemon) is an NPM package that automatically restarts your node application when file changes in the directory are detected. Run the following in the Terminal:

1. Run `npm install -g nodemon` to install the nodemon package globally
1. Run `nodemon index.js` (instead of node)
1. Edit `index.js` and save it. The nodemon process will see the change and run your code each time you save. 

```bash
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
```

<div class="caption slides-small">
    Before proceding, exit from nodemon with <code>ctl+c</code>
</div>





---

## 👉 The package.json file

A `package.json` file contains information about a project, including its name, how to test it, and dependencies.

1. Create a new folder named `cron-demo` and open it in Terminal
1. Run `npm init` and press return at each dialog prompt. This step initializes the project and creates a `package.json` file that contains any data you entered. 
1. Confirm the `main` field is set to `index.js` in your `package.json` file. It is simply json and you can edit it by hand.
1. Run `nodemon` again (without the filename) which now knows the "main entry point" of your project and starts it.

<div class="caption slides-small">
    Exit from nodemon with <code>ctl+c</code>
</div>


---

## 👉 Use the Cron package

[Cron](https://www.npmjs.com/package/cron) is an NPM package that executes scripts on a schedule (e.g. each/second, once/day) or at a particular time. Use it to automate tasks like database backups, or data or image conversion.

1. Run `npm i cron --save` in the Terminal. 
1. A dependency (e.g. `"cron": "^2.2.0"`) has been added to `package.json` as well as a new folder `node_modules` with all the dependencies it needs. 
1. Add the code below to your `index.js` file and run `nodemon` in the Terminal.
1. Use [crontab.guru](https://crontab.guru/) to experiment with the time.



---

## 👉 Cron sample code


```js
// require the package
var CronJob = require('cron').CronJob;
// create a new instance
var job = new CronJob(
	'* * * * * *',
	function() {
		console.log('You will see this message every second');
	},
	null, true, 'America/Los_Angeles'
);
```


---

## 👉 More about packages 

- Every package has a README with documentation. Explore it on github or [npmjs.com](https://www.npmjs.com/)
- The `package-lock.json` manages the dependencies of your project dependencies. Best to let NPM manage this file.
- Never commit the `node_modules` folder to your git repository. Instead, if you need to use this code on a new computer (or server) run `npm install` and it will install all your dependencies, including any security updates. 





---

## Next Steps

1. Continue learning [Node Express](../node-express/slides.html) 
1. Examine code in [demos/basic-node](./demos/basic-node) (modules and writing files) or see slides at end of this presentation
1. Explore tutorials [tutorialspoint](https://www.tutorialspoint.com/nodejs/index.htm), [nodejs.dev](https://nodejs.dev/en/learn/introduction-to-nodejs/), [guru99.com](https://www.guru99.com/node-js-tutorial.html), [tutorialsteacher.com](https://www.tutorialsteacher.com/nodejs) 
1. Check out sample projects using Node:
    - [Node/Express Cat API](https://github.com/omundy/sample-node-express-cat-api)
    - [Node/Express Username Generator](https://github.com/omundy/sample-node-express-username-generator)
    - [Node/Express + Leaflet](https://github.com/omundy/sample-node-osm-leaflet)
    - [Sample Node Tools 🦋](https://github.com/omundy/sample-node-tools)
    - [Sample Node Proxy Server](https://github.com/omundy/sample-node-proxy-server)
    - [Use the Zotero API](https://github.com/omundy/sample-node-zotero-api)
    - [Intro to web scraping with Node](https://github.com/omundy/sample-node-scrape-parse)




---

## References

1. [Brown](https://www.oreilly.com/library/view/web-development-with/9781492053507/) Ch1 Introducing Express (1-9) and Ch2 Getting Started with Node (11-20)
1. w3schools [nodejs](https://www.w3schools.com/nodejs/default.asp), [intro](https://www.w3schools.com/nodejs/default.asp), [command line](https://www.w3schools.com/nodejs/nodejs_get_started.asp), [npm](https://www.w3schools.com/nodejs/nodejs_npm.asp)











---

## Advanced Node Installation

- Using NVM
- Managing NPM packages


---

## How to install Node using NVM

[Node Version Manager](https://github.com/nvm-sh/nvm#intro) (NVM) make it easy to install and use different versions of node via the command line. [Reference](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)

1. Install [Homebrew](https://brew.sh/)
2. Update then install NVM

```bash
brew update
brew upgrade
brew install nvm
```

See [these instructions for NVM, Node, NPM on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)


---

## How to install Node (versions) using NVM

The [latest](https://nodejs.org/en/) node version

```bash
nvm install v16.10.0
nvm ls
nvm use 16
```

The [latest LTS](https://nodejs.org/en/about/releases/) (Long Term Support) node version

```bash
nvm install --lts
nvm ls
nvm use <NUMBER>
```


---

## How to ... NVM

#### How to update NVM

```bash
brew update
brew upgrade # to install
```

#### How to update NPM using NVM

```bash
nvm install-latest-npm
```



---

## How to upgrade NPM packages

[npm-upgrade](https://www.npmjs.com/package/npm-upgrade) is an interactive CLI utility to easily update outdated NPM dependencies

```js
npm i -g npm-upgrade
npm-upgrade check
```
