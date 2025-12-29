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
- Use NPM (Node Package Manager) to install, manage, and incorporate open source software packages (dependencies) in your projects.


---

## Node Installation

There are several ways to install Node (which includes NPM) on your machine

1. Use an [installer via node website](https://nodejs.org/en/download/) (fastest, but difficult to upgrade).
1. Use a system package manager like Homebrew or Scoop (easy to upgrade)
1. Use [nvm](https://nodejs.org/en/download) (the most flexible method, but takes longer).

I recommend #2. Choose your OS and install Node below.





---

## 👉 Install Node & NPM

<div class="twocolumn">
<div class="col">

**Mac**

1. Install [Homebrew](https://brew.sh/) (Mac package manager) using their instructions
2. Install [Node](https://formulae.brew.sh/formula/node) using Homebrew

```bash
brew install node
```

<div class="slides-small">
	Tutorial for <a href="https://nodesource.com/blog/update-Node.js-versions-on-MacOS" target="_blank">updating</a> MacOS installations
</div>


</div>
<div class="col">

**Windows**

⚠️ Many Unix commands do not work in Windows PowerShell. Install and use [Git Bash](https://gitforwindows.org/) instead.

1. Install [Scoop](https://scoop.sh/) (Windows package manager) using their instructions
2. Install [Node](https://scoop.sh/#/apps?q=nodejs&s=0&d=1&o=true) using Scoop

```bash
  scoop bucket add main
  scoop install main/nodejs-lts
```

</div>
</div>






---

## 👉 Confirm your Node version

Run these to make sure that Node installed correctly:

```bash
node -v     # check node version
npm -v      # check npm version
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
3. Type `Ctl+C` to cancel in the shell




---

## 👉 Run a script with Node

1. Create a new folder named: `cron-demo` and open it in VS Code (in Mac you can just drag the folder from the finder to the VS Code icon in the dock)
2. Create a file in this folder named `index.js` and paste the below code.

```js
let greeting = "Hello, from Node";
console.log(greeting);
```

3. In the VS Code Terminal, run* the script with 

```bash
node index.js
```

<div class="slides-small">

1. The name `index.js` is arbitrary. Other names like `server.js` and `app.js` are also popular for different use cases.
1. Notice that Node stops automatically after it runs all the code.

</div>










---

## 👉 Initialize a new project with NPM

Every Node.js project has a `package.json` to store project dependencies and other metadata. 

1. Open `cron-demo` in VS Code (above)
2. Run `npm init` to initialize a new project. Press return at each prompt. This creates a `package.json` file with data you entered. 
3. Open your new `package.json` file. Confirm the `main` field is set to `index.js`.
4. Add a new sub-property under `scripts`. Add a comma after the `test` property, then add `"start": "node index.js"` below it.
5. Run `npm run start` which runs the command stored in `start`.


<details>
<summary>Example</summary>

```json 
{
  "name": "cron-demo",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }
}
```

</details>


<!-- 
<div class="twocolumn">
<div class="col">

1. Open `cron-demo` in VS Code (above)
2. Run `npm init` to initialize a new project. Press return at each prompt. This creates a `package.json` file with data you entered. 
3. Open your new `package.json` file. Confirm the `main` field is set to `index.js`.


</div>
<div class="col">

4. Edit the `scripts` property. Add a comma to the end of the `test` property, then add `"start": "node index.js"` below it.
5. In the Terminal run, `npm run start`

</div>
</div>
 -->



---

## 👉 Install Nodemon using NPM

[Nodemon](https://www.npmjs.com/package/nodemon) is an NPM package that automatically restarts your node application when it detects file changes your the project directory. 

1. Install the nodemon package globally `npm install -g nodemon` (the `-g` flag makes it global)
2. Run `index.js` using nodemon (instead of node) `nodemon index.js`
3. Edit and save `index.js`. Nodemon will restart your script each time you save. 
4. Exit the process with `Ctl+C` (this exits any process on the Terminal).
5. Run `nodemon` again (omit the filename) to default to the script in `main`.

```bash
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
```









---

## 👉 Use the Cron package

[Cron](https://www.npmjs.com/package/cron) is an NPM package that executes scripts on a schedule (e.g. each/second, once/day) or at particular times. Use it to automate any common task like database backups, etc..

1. Run `npm i cron --save` in the Terminal (`i` is a shortcut for `install`, `--save` adds a dependency to your project's `package.json`) 
1. In `package.json` a new dependency has been added, as well as a new `node_modules` folder, where the cron package and packages it uses was just installed. 
1. Add the code from the next slide to your `index.js` file.
1. Run it with `nodemon index.js` in the Terminal.
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
		console.log('The local time is: '+ new Date().toLocaleString());
	},
	null, true, 'America/New_York'
);
```


---

## More about packages 

- Every package has a README with documentation. Explore it on github or [npmjs.com](https://www.npmjs.com/)
- The `package-lock.json` manages the dependencies *of your project dependencies*. Do not edit this file.
- Never commit the `node_modules` folder to your git repository. To run your project on another machine (or server), just clone it and run `npm install` install all your dependencies. 




---

## 👉 Commit your project



<div class="twocolumn2x1">
<div class="col">

1. With your project open in VS Code, type in the Terminal to create a repo

```bash
git init
```

2. Notice all your files are now considered <span style="color:green">additions</span>
3. Before you commit, add a `.gitignore` file using 

```bash
touch .gitignore
```

4. Paste the text to the right in the file and save.
5. Drag your project folder into Github Desktop. Then publish it.


</div>
<div class="col">


```gitignore
# Windows
Thumbs.db
desktop.ini

# OS X
.DS_Store
.Spotlight-V100
.Trashes
._*

# JS
node_modules
```


</div>
</div>




---

## CommonJS vs Modules (ES)

If you see this message, you might be mixing old and new methods for importing code. See [Modules](../modules/slides.html)

```text
ReferenceError: require is not defined in ES module scope, you can use import instead
```


<div class="twocolumn">
<div class="col">

**CommonJS**

The [old way](https://nodejs.org/api/modules.html) for importing packages and reusable code in your projects.
`var one = require('./one.js');`

</div>
<div class="col">

**ESM**

The [new way](https://nodejs.org/api/esm.html). Now mostly universal.
`import { two } from './two.js';`
You have to add `"type": "module"` in package.json to use `import`

</div>
</div>


<div class="slides-small">

[CommonJS vs. ES modules in Node.js](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/), 2024

</div>















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
// install utility globally
npm i -g npm-upgrade
// run in a project
npm-upgrade check
```

![npm-upgrade](./img/npm-upgrade.png)



---

## Install Node using NVM

While you can download and run a [prebuilt installer](https://nodejs.org/en/download) NVM (Node Version Manager) let's you manage and upgrade your installation later.

1. Install NVM with Homebrew (Mac only) or run the [Node NVM install scripts](https://nodejs.org/en/download/package-manager) (all platforms) one line at a time on the command line.

```bash
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Use NVM to install Node

```bash
# download and install Node.js
nvm install 20
```



