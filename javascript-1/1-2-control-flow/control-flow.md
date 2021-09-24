
← [Variables](../1-1-variables/variables.md) | [Functions & Scope](../1-3-functions-scope/functions-scope.md) →

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# 1-2 Control Flow

Comparison and logical operators, conditional statements


## Contents

1. [Introduction](#introduction)
1. [Selecting HTML elements](#selecting-html-elements) `5 min`
1. [Operators](#operators) `5 min`
1. [Conditions](#conditions) `5 min`






1. [Next steps](#next-steps)
1. [Exercises](#exercises)
1. [References](#references)


## Introduction

Review the following sections and perform the activities on your own or with your group.

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

- Demonstrate how to
- Explain
- Use Javascript to
- List

</details>

<details>
<summary>Homework</summary>

- [Codecademy: JS 2-1 Conditional Statements ](https://www.codecademy.com/learn/introduction-to-javascript) (1–8)
- [Codecademy: HTML 3-1 Forms](https://www.codecademy.com/learn/learn-html) (1-14)
- [Codecademy: HTML 3-2 Form Validation](https://www.codecademy.com/learn/learn-html) (1-6)
- Quiz 7 - JS Control Flow

</details>







## Selecting HTML elements

In order for Javascript to change values on a web page, we have to use it to **select** elements. There are several ways to do this.


Type this into the Console and hit return.

```js
window
```

The window is your key to accessing the DOM (Document Object Model) with Javascript. You can set or get any value stored in the page, or use any method (function) that is built in. Try some of these:













## Operators

Let's review some of the [operators](https://www.w3schools.com/js/js_operators.asp) we've seen thus far.


### [Arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)

Perform addition `+`, subtraction `-`, multiplication `*`, division `/` on numbers

```js
1 + 1 // -> 2
3.14 * 2 // -> 6.28
```

Increment `++` or decrement `--` a value

```js
let count = 1;
count ++; // -> 2
count --; // -> 1
```

Modulus `%` to return the remainder from a division operation

```js
5 % 2 = 1
```

The `+` operator can also be used to concatenate (add) strings

```js
"Hello" + " world!" // -> "Hello world!"
```



### [Assignment operators](https://www.w3schools.com/js/js_assignment.asp)

Perform an expression and then assign the value.

```js
let apples = 100;
```

These operators can be used to add and assign number values ...

```js
apples ++; // -> 101
apples += 10; // -> 111
```

... or to (convert and) concatenate and assign strings.

```js
apples += " apples"; // -> "111 apples"
```



### [Comparison operators](https://www.w3schools.com/js/js_comparisons.asp)

These operators are used to test for `true` or `false`.

The double `==` compares value only. If operands of different types are used then Javascript will convert to the type on the left and compare.

```js
1 == 1 // -> true
1 == "1" // -> true
1 != 2  // -> true
```

The triple `===` checks value and type

```js
1 === "1" // -> false
```

Greater than / greater than or equal to

```js
2 > 1 // -> true
3 <= 2 // -> false
```





### [Logical operators](https://www.w3schools.com/js/js_comparisons.asp)

Used to determine the logic between variables or values


Use `&&` ("and") to test if *both* expressions are `true`

```js
(1 < 2 && 3 > 4) // -> false
```

Use `||` ("or") to test if *either* expression is `true`

```js
(1 < 2 || 3 > 4) // -> true
```

Use `!` ("not") to test if the expression is not `true`

```js
!true // -> false
!false // -> true
!(1 < 2) // -> false
```




## Conditions

Control flow determines what code is executed and the order in which it will happen.

The default behavior of Javascript is to execute the statements it finds, line by line.

<img src="../../assets/img/javascript-diagram-control-structures-sequence.png" width="800">


However, you will often want your code to perform different actions for different situations. You can use **conditionals** to do this.

<img src="../../assets/img/javascript-diagram-control-structures-if.png" width="800">

In the above diagram, an if statement is used to either skip the statement block or not, depending on whether the condition is true or false.

Here is the syntax for a basic `if` statement. In this case, if the value stored in `apples` is a number greater than 3, then the message will be logged to the console.

<img src="../../assets/img/javascript-anatomy-if-code-block.png" width="800">

We use an `if/else` to execute different code, if the first condition is not met.

<img src="../../assets/img/javascript-diagram-control-structures-if-else.png" width="800">










## Web Forms


```

<form action="#">

  <input type="text" id="hi">
  <input type="submit">
</form>

```

document.addEventListener("submit", function(e){
	console.log(document.getElementById("hi").value);
  e.preventDefault();
})

https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault










 ## Next steps

 1. Try examples in the [Exercises](#exercises) below.
 1. Start working on homework listed in the schedule.
 1. Continue learning about Control Flow in the [next lesson](../1-2-control-flow/control-flow.md).




 ## Exercises

 👉 **Try it out** - ...



 Demo: [The Lottery v.1](demos/games/the-lottery/) - your first game!

 Exercise: With a partner: [Gradebook Conditions](exercises/02-grade-book.md). Start homework...


 - Exercises:
 	- Ch2 [Looping a triangle](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [FizzBuzz](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [Chessboard](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe)



    The data, conditions, and events of Javascript can be seen at work in [this lamp demo](https://omundy.github.io/learn-javascript/1-0-introduction/javascript-lamp/index.html)










 ## References

 - Haverbeke [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-26)
 - Codecademy Cheatsheet(s) [Conditionals](../../reference-sheets/js-02-conditionals.pdf)
 - W3schools [operators](https://www.w3schools.com/js/js_operators.asp), [assignment](https://www.w3schools.com/js/js_assignment.asp), [arithmetic](https://www.w3schools.com/js/js_arithmetic.asp), [comparisons](https://www.w3schools.com/js/js_comparisons.asp), [conditions](https://www.w3schools.com/js/js_if_else.asp), [output](https://www.w3schools.com/js/js_output.asp)
