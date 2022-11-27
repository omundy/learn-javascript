<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Javascript Modules

How to use modules in the browser and node

<span class="slides-small"><a href="slides.html">slides</a> | <a href="modules.md">md</a></span>

<!--
Presentation comments ...
-->


---

## About modules

> In programming, modules are self-contained units of functionality that can be shared and reused across projects. They make our lives as developers easier, as we can use them to augment our applications with functionality that we haven’t had to write ourselves. They also allow us to organize and decouple our code, leading to applications that are easier to understand, debug and maintain.

<div class="caption slides-small">
	<a href="https://www.sitepoint.com/understanding-module-exports-exports-node-js/" target="_blank">Understanding module.exports and exports in Node.js</a>
</div>




---

## The benefits of modularity

- Modules are a way to split an application into separate files instead of having all of your application in one file.
- This concept is also present in other languages with minor differences in syntax and behavior, like C's `include`, Python's `import`, and so on.
- Modular design makes your application easy to understand, scale, and reuse.



---

## NPM packages are modules

- NPM is a package repository service that hosts published JS modules. `npm install` will download and install packages from the repository.
- The npm cli puts all the downloaded modules in a `node_modules` directory where you ran `npm install`.



---

## Modular design in Node

<div class="twocolumn">
<div class="col">

- Node.js and NPM use the <a href="https://en.wikipedia.org/wiki/CommonJS" target="_blank">CommonJS (CJS) format</a>, `require` and `module.exports`, to define dependencies and modules.

</div>
<div class="col">

```js
// module.js
var exports = module.exports = {};
exports.randomNumber = (max = 1) => {
	return Math.random() * max;
};

// index.js
const modEx = require('./module');
modEx.randomNumber(); // -> 0.927759
```

<div class="caption slides-small">
	<a href="https://www.sitepoint.com/understanding-module-exports-exports-node-js/" target="_blank">Understanding module.exports and exports in Node.js</a>
</div>

</div>
</div>




---

## Modular design in Javascript (the old way)

<div class="twocolumn">
<div class="col">

Modular design in the browser is achieved by simply including multiple files with `<script>`. But there are drawbacks:
- Each new script initiates a new HTTP request (and potential lantency)
- Dependencies must be managed manually
- Each script is in the global scope, <a href="https://www.patterns.dev/" target="_blank">requiring creative design patterns</a> to prevent contamination.

</div>
<div class="col">

```html
<!-- index.html -->
<script src="lib1.js"></script>
<script src="lib2.js"></script>
<script src="core.js"></script>
<script>
console.log('inline code');
</script>
```

<div class="caption slides-small">
	<a href="https://www.sitepoint.com/understanding-es6-modules/" target="_blank">Understanding ES6 Modules</a>
</div>

</div>
</div>




---

## ES6 Modules + Node

<div class="twocolumn">
<div class="col">

- As of ES6 (ES2015), JavaScript supports a native module format.
- It uses the `export` keyword to export a module’s public API and an import keyword to import it.


</div>
<div class="col">

```js
// lib-module.js
const hello = "Hello, World!"; // "private" var
export const sayHello = () => hello;

// main.js
import { hello } from './lib-module.js';
console.log(hello()); // -> "Hello, World!"
```

<div class="caption slides-small">
	<a href="https://www.sitepoint.com/understanding-es6-modules/" target="_blank">Understanding ES6 Modules</a>
</div>

</div>
</div>




---

## Private vars

- Each module has its own scope so that vars are not exposed unless the module intentionally uses `exports` (node) or `export` (ES6) to make them accessible. (see previous slide)








---

## Modular design in the browser

- Note that `require()`, `module.exports` and `exports` are APIs of a module system that is specific to Node.js.
- While browsers do not implement this module system, similar benefits can be achieved with the [Revealing Module Pattern](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s03.html).


---

## Revealing Module Pattern

- The Revealing Module Pattern is a JS design pattern *in a web browser* that mimics private and public access modifiers of other languages (e.g. C# or Java).
- All functions and variables are hidden by default within the scope of an IIFE (immediately-invoked function expression), and exposed as needed.
- See [./demos](./demos) for examples




---

## References

- w3schools [JavaScript Object Accessors](https://www.w3schools.com/js/js_object_accessors.asp), [Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
- Zach Caceres [The Revealing Module Pattern in Javascript](https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2#file-revealing-module-pattern-md)
- Cheatsheets [Compatibility](../reference-sheets/js-10-compatibility.pdf) and [Modules](../reference-sheets/js-11-modules.pdf)
- Haverbeke: [Ch10 Modules](https://eloquentjavascript.net/10_modules.html) (167-178)
