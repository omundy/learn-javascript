




## Programming patterns

### About

- Especially those appropriate to your environment
	- e.g. a singleton doesn't work well in web dev, and MVC does not work well in game dev.



### Logic Centralization

- A [design pattern](https://en.wikipedia.org/wiki/Logic_centralization_pattern) that encourages you to keep variables and logic in one place.
- Discourages redundant code, and helps to make sure variables don't change without good reason.
- Can be often fixed by clear S.O.L.I.D. principles and OOP.

Scenario: You have four different functions that can all change the login status of a user. Since you update this with several pieces of logic it is not only redundant and hard to maintain, but very difficult to debug.

Fix: Keep all logic that changes global variables in a central location.



## D.R.Y.
