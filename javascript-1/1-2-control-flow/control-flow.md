
← [Variables](../1-1-variables/variables.md) | [Functions & Scope](../1-3-functions-scope/functions-scope.md) →

<a href="../../README.md"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# 1-2 Control Flow

Comparison and logical operators, conditional statements


## Contents

1. [Introduction](#introduction)
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

Control flow determines what code is executed and the order in which it will happen. To illustrate this, first consider the default behavior of Javascript.

<img src="../../assets/img/javascript-diagram-control-structures-sequence.png" width="800">

As the program runs, it will execute the instructions it finds, line by line, until the end.

```js
let apples = 0;
apples = apples + 10;
console.log(`We have ${apples} apples!`);
```

However, this is not very interesting. Instead, you will often want your code to perform *different* actions depending on the **state** of variables in your program.

You can use **conditionals** to do this.

<img src="../../assets/img/javascript-diagram-control-structures-if.png" width="800">

In the above diagram, an **`if`** statement is used to either run the statement block, or not, depending on whether the condition is true or false.

Here is the syntax for a basic `if` statement. In this case, if the value stored in `apples` is a number greater than 3, then the message will be logged to the console.

<img src="../../assets/img/javascript-anatomy-if-code-block.png" width="800">


We use an **`if/else`** to execute different code, if the first condition is not met.

<img src="../../assets/img/javascript-diagram-control-structures-if-else.png" width="800">

Here is the apples example in practice:

```js
let apples = 2;
if (apples > 3) {
	console.log("we can make pie!")
} else {
	console.log("we need more apples")
}
```












## Next steps

1. Try the [Exercises](#exercises) below.
1. Start working on homework listed in the schedule.
1. Continue to the [next lesson](../../README.md#javascript-part1).




## Exercises

👉 **Try it out**

1. [Lottery v.1](../../javascript-topics/games/the-lottery/README.md) - Build your first game!
2. [Gradebook Conditions](../1-3-functions-scope/exercise-grade-book.md) - Use conditions, functions, and jquery to code a gradebook app.
3. Exercises from Eloquent Javascript Ch2 [Looping a triangle](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [FizzBuzz](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe), [Chessboard](https://eloquentjavascript.net/02_program_structure.html#h_TcUD2vzyMe)



The data, conditions, and events of Javascript can be seen at work in [this lamp demo](https://omundy.github.io/learn-javascript/1-0-introduction/javascript-lamp/index.html)



## References

- Haverbeke [Ch2 Program Structure](https://eloquentjavascript.net/02_program_structure.html) (22-26)
- Codecademy Cheatsheet(s) [Conditionals](../../reference-sheets/js-02-conditionals.pdf)
- W3schools [operators](https://www.w3schools.com/js/js_operators.asp), [assignment](https://www.w3schools.com/js/js_assignment.asp), [arithmetic](https://www.w3schools.com/js/js_arithmetic.asp), [comparisons](https://www.w3schools.com/js/js_comparisons.asp), [conditions](https://www.w3schools.com/js/js_if_else.asp), [output](https://www.w3schools.com/js/js_output.asp)
