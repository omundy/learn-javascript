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
- With Node you can build servers, connect to databases, create APIs, full stack websites, standalone software, and much more.
- NPM (Node Package Manager) lets you install / manager open source software packages you can include in your projects.


---

## Node Installation

There are several ways to install Node (which includes NPM) on your machine (ordered easiest to hardest)

1. Use an [installer via node website](https://nodejs.org/en/download/) (fastest, but difficult to upgrade).
1. Use a system package manager like Homebrew or Scoop (easy to upgrade)
1. Use [nvm](https://github.com/nvm-sh/nvm) (is the most flexible method but potentially adds complexity for new users).






---

## Install Node using Homebrew (Mac)

1. Install [Homebrew](https://brew.sh/) (Mac package manager) using their instructions
2. Install [Node](https://formulae.brew.sh/formula/node)

```bash
brew install node
```


---

## Install Node & NPM using Scoop (Windows)

1. Install [Scoop](https://scoop.sh/) (Windows package manager) using their instructions
2. Install [Node](https://scoop.sh/#/apps?q=nodejs&s=0&d=1&o=true)

```bash
scoop install nodejs
```





---

## Confirm your Node version

```bash
node -v                    # check node version
npm -v                     # check npm version
```


---

## Install Nodemon

- Nodemon will automatically restart your node scripts when you save your file.

```bash
npm install -g nodemon     # install a package globally
nodemon index.js # run your node script, restarting for each save
```



## Next Steps

Check out the sample projects using Node/Express and other tools:

- [Sample Node/Express Template](https://github.com/omundy/sample-node-express-template)
- [sample-node-express-site](https://github.com/omundy/sample-node-express-site) - Node/Express + Handlebars
- [Node/Express Username Generator](https://github.com/omundy/sample-node-express-username-generator)
[Node/Express + Leaflet](https://github.com/omundy/sample-node-osm-leaflet)
- [Async Javascript Examples](https://github.com/omundy/sample-node-async)
- [Sample Node Tools 🦋](https://github.com/omundy/sample-node-tools)
- [Sample Node Proxy Server](https://github.com/omundy/sample-node-proxy-server)
- [Use the Zotero API](https://github.com/omundy/sample-node-zotero-api)


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
