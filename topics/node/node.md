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




---

## Install Node & NPM

1. Install [Homebrew](https://brew.sh/)
2. Update then install NVM (Node Version Manager)

```bash
brew update
brew upgrade
brew install nvm
```




---

## Node Installation

How to install node and npm on your machine. There are three ways, I recommend #2

1. Use an [installer via node website](https://nodejs.org/en/download/). **Not recommended** because it is difficult to upgrade.
1. Installing using a system package manager (below) gives you flexibility to update or change versions later.
1. Installing using [nvm](https://github.com/nvm-sh/nvm) is the most flexible method but potentially adds complexity for new users.

**Mac** - Install [homebrew](https://brew.sh/) (Mac package manager), then [node](https://formulae.brew.sh/formula/node)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

**Windows** - Install [Scoop](https://scoop.sh/) (Windows package manager)

```bash
scoop install nodejs
```


---

## After node is installed

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





## How to upgrade NPM packages

[npm-upgrade](https://www.npmjs.com/package/npm-upgrade) is an interactive CLI utility to easily update outdated NPM dependencies

```js
npm i -g npm-upgrade
npm-upgrade check
```
