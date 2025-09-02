<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Automation

How to automate (tools|builds|etc) using Grunt and other tools

<span class="slides-small"><a href="slides.html">slides</a> | <a href="control-flow.md">md</a></span>

<!--
Presentation comments ...
-->




---

## Introduction

Review the following sections and perform the activities on your own or with your group.

Perform the task(s) when you see this 👉  emoji

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

- Describe some goals of automation and build tasks
- Demonstrate use of grunt for testing

</details>














---

## About

- [Grunt](https://gruntjs.com/) and [Gulp](https://gulpjs.com/) a "[task runners](https://www.keycdn.com/blog/gulp-vs-grunt)" that can automate repetitive tasks like minification, compilation, testing etc.




---

## Install Grunt

Install grunt globally so you can call it simply with `grunt`

```bash
# install grunt globally
npm install -g grunt-cli
```

---

## 👉 Run the test project


```bash
# cd into example
cd demos/grunt-test-project
# install packages
npm i 
# run
grunt watch
```

Now, every time you save a file inside the directory, including `Gruntfile.js`, Grunt will re-load the file on the terminal. 

Check out the Grunt config at the root of this repository.




