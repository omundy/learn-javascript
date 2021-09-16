
← [Learn Javascript](../README.md)

# Testing
Tutorials, references, and tips





## Overview

Software testing automates checking whether code is defect free and that its outcomes match expected requirements. Testing usually involves either [white box testing](https://www.guru99.com/white-box-testing.html), executing one or more parts of the internal code, or [black box testing](https://www.guru99.com/black-box-testing.html), treating the software as a closed system with access to only inputs and outputs to evaluate the overall functionality.



## Test Types

Javascript website and application testing falls generally into the following categories:


### Unit tests

A Unit Test tests individual units of software like functions or classes. It supplies input and confirms output is as expected. Below, we test a function called `sum()` which returns the sum of two numbers.

```js
expect(sum(3,7)).to.be(10) // -> true
```

### Integration Tests

These tests check processes *across* several units, including their side effects. This example checks multiple parts of an app.

```js
// get button, initiate click
const colorButton = document.getElementById('color-button')
colorButton.click()
// test using assert()
assert(hasColorChanged())
// test using promise, then assert
app.checkIfColorChanged().then(colorChanged => assert(colorChanged))
```


### End-to-end Tests

Also called **e2e** or **functional** tests, these test the end product by controlling the browser or the website. These test the app as if it were a black box, with no access to internal code, automating things a user might do. Below, pseudocode showing how a login form might be tested.

```js
Go to page "https://localhost:3000"
Type "test-user" in the field "#username"
Type "test-pass" in the field "#password"
Click on "#login"
Expect Page Url to be https://localhost:3303/dashboard
Expect "#name" to be "test-name"
```


## Running Tests

To run Javascript tests, you must use a browser, or equivalent environment that provides all the standard objects like `window`, `document`, `body`, `location`, `cookies`, and `selectors`:

1. **Tests can run in a browser** using an HTML page with test libraries and test files included as JS scripts.
1. **Tests can run in a [headless browser](https://gist.github.com/MegaBedder/a4d418398884ef8d7b5c33e973da6ed6)** where code executes without actually rendering on the screen.
1. **Tests can run in a browser simulation** where test libraries and files execute in a browser-like environment using pure Javascript. Examples: [jsdom](https://github.com/jsdom/jsdom)

The second two options use Node on the command line and do not render anything to the screen so they are faster.


## Terms

Term | Description
--- | ---
[Assertions](https://jestjs.io/docs/expect) | Make sure that tested variables contain the expected value. e.g. `expect(sum(3,7)).to.be(10)`
[Setup and Teardown](https://jestjs.io/docs/setup-teardown) | Sometimes some work is required before or after tests run. In Jest, you can use `beforeEach` and `afterEach`.
[Stub](https://learn.co/lessons/javascript-mocks-and-stubs) | Replaces selected methods of existing modules with user-supplied functions in order to ensure expected behavior during the test.
[Mocks](https://jestjs.io/docs/mock-functions) | a.k.a. "Fakes" are used to fake certain modules or behaviors to test different parts of a processes.
[Spies](https://learn.co/lessons/javascript-spies) | Attach themselves to functions to provide us extra information about them.
[Browser Controllers](https://applitools.com/blog/comparing-javascript-browser-automation-frameworks/) | Simulate user actions for e2e / Functional Tests. e.g. [Nightwatchjs](https://nightwatchjs.org/), [Puppeteer](https://github.com/puppeteer/puppeteer), or [WebdriverIO](https://webdriver.io/)









## References

- Vitali Zaidman [An Overview of JavaScript Testing in 2021](https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870)
- Kent C. Dodds [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- Uzair Shamim [Integration Testing Browser Extensions with Jest](https://medium.com/information-and-technology/integration-testing-browser-extensions-with-jest-676b4e9940ca)
- Paul W. [Headless Browser Testing with Jest and Puppeteer](https://medium.com/ovrsea/headless-browser-testing-with-jest-and-puppeteer-2cf7d04f4af5) (2017)
