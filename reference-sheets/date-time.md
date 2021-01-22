

# Date and Time

An overview of using the Date() object in JS. These are basic uses, Open your browser's console to run the sample code.


Javascript has a [Date object](https://www.w3schools.com/jsref/jsref_obj_date.asp)
```js
// get the current UTC time in ISO-8601
new Date();
// -> 2020-12-06T14:20:21.062Z
```

Store and use Date()
```js
// store Date object using constructor
const currentDate = new Date();
// use  built in methods
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();
const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
// -> "27-11-2020"
```

A time stamp is the number of milliseconds that have passed since January 1, 1970.
```js
const currentDate = new Date();
const timestamp = currentDate.now();
// -> 1607265575863
```

Parse a date string using Date()
```js
new Date("Wed, 27 July 2016 13:30:00")
// -> "2016-07-27T17:30:00.000Z"
new Date("July 2000")
// -> "2000-07-01T04:00:00.000Z"
```

Compare two dates using their Date()
```js
const date1 = new Date("July 19, 2014");
const date2 = new Date("July 28, 2014");

if(date1 > date2) {
    console.log("First date is more recent");
} else {
    console.log("Second date is more recent");
}
// -> "Second date is more recent"
```





Articles
- [The Definitive Guide to DateTime Manipulation](https://www.toptal.com/software/definitive-guide-to-datetime-manipulation)
- Moment.js is dead; [some alternatives](https://momentjs.com/docs/#/-project-status/recommendations/)
