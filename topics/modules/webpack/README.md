
## Webpack example


References
- [Setting up Chrome Extensions for use with ES6](https://www.coreycleary.me/setting-up-chrome-extensions-for-use-with-es6) - [Webpack](https://webpack.js.org/guides/getting-started/), testing, modules
- [ES6 modules in chrome extensions — An introduction](https://medium.com/front-end-weekly/es6-modules-in-chrome-extensions-an-introduction-313b3fce955b)

```bash
npm install --save-dev webpack webpack-dev-server
npm install -g webpack-dev-server
npm i -g webpack-cli
npm install --save-dev babel-preset-es2015 babel-loader babel-register
```

To run
```bash
webpack ./src/app.js -o bundle.js
```
