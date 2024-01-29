<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Javascript – Working with Data

"<em>Above all else, show the data.</em>"– Edward R. Tufte


<!--

- [Data Collections](#data-collections)
- [Data Exchange Formats](#external-data)
- [Using External Data](#using-external-data)
	- [Cross-Origin Resource Sharing](#cross-origin-resource-sharing)
	- [Serialization and Deserialization](#serialization-and-deserialization)
- [Loading External Data](#loading-external-data)
	- [Fetch](#fetch)
	- [D3 (.json, .csv, ...)](#d3-json-csv-)
	- [Loading data from Google Sheets](#loading-data-from-google-sheets)
		- [Method 1 - Download it manually](#method-1-download-it-manually)
		- [Method 2 – Make it publicly accessible](#method-2-make-it-publicly-accessible)
		- [Method 3 - Use the Google Sheets API](#method-3-use-the-google-sheets-api)
	- [How to get data from an API](#how-to-get-data-from-an-api)
- [Data Storage](#data-storage)
	- [Static vs. Dynamic](#static-vs-dynamic)
	- [Flat files vs. Databases](#flat-files-vs-databases)
	- [Browser-based storage](#browser-based-storage)
- [Data Cleaning](#data-cleaning)
- [Data Conversion](#data-conversion)
	- [Convert CSV to JSON](#convert-csv-to-json)

-->







---

## Data Collections

<div class="twocolumn1x2">
<div class="col">

In addition to [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) (`boolean`, `number`, and `string`), Javascript can store collections (e.g. `arrays`, `objects`, etc.)

<div class="caption slides-small">
	For more on arrays, objects, and other collections see: <a href="../../topics/data-structures/slides.html" target="_blank">Data Structures</a> or
	<a href="https://github.com/omundy/learn-computing/blob/main/topics/data-types.md#about-data-types" target="_blank">Learn Computing > Data Types</a>
</div>


</div>
<div class="col">

```js
// array
let primaries = ["red", "green", "blue"];
// object
var singer = {
    "name": "Bruce Springsteen",
    "albums": [{
            "name": "Born to Run",
            "year": 1975
        }, {
            "name": "Born in the U.S.A.",
            "year": 1984
        }, {
            "name": "The Ghost of Tom Joad",
            "year": 1995
        }]
};
```

</div>
</div>






---

## Data Exchange Formats

<div class="twocolumn">
<div class="col">

- Data collections can be stored (serialized) in code, or imported from external files, databases, or API servers.
- Exchange formats standardize how data is stored and transmitted. These are generally tabular or hierarchical.

<div class="caption slides-small">
	For more see:
	<a href="https://github.com/omundy/learn-computing/blob/main/topics/data-types.md#data-exchange-formats" target="_blank">Learn Computing > Data Exchange Formats</a>
</div>


```
"make", "model", "year"
"Pontiac", "Vibe", 2009
"Honda", "Fit", 2007
"Chevrolet", "Blazer", 2000
"Toyota", "RAV4", 1999
```
<div class="caption slides-small">
	Tabular data exchange formats (e.g. <code>CSV</code>, <code>TSV</code>, etc.)
</div>


</div>
<div class="col">


```json
{
    "cars": [{
        "make": "Pontiac",
        "model": "Vibe",
        "year": 2009
    }, {
        "make": "Honda",
        "model": "Fit",
        "year": 2007
    }, {
        "make": "Chevrolet",
        "model": "Blazer",
        "year": 2000
    },
    ...]
}
```
<div class="caption slides-small">
	Hierarchical data exchange formats (e.g. <code>JSON</code> or <code>XML</code>)
</div>

</div>
</div>



---

## Using External Data

Important concepts to know when importing external data into your program:

- External data sent over a network is **serialized** (as a string) and must be **deserialized** (stored as data in computer memory) to use in your program.
- The most common method to retrieve external data in Javascript is the `fetch()`, which can deserialize using the `.json()` method.
- Your program must have **access** to retrieve external data by the [CORS policy](#cross-origin-resource-sharing) on the remote server.





---

## Serialization

- When you create a variable in your program it stores data in the memory of the computer. If you restart your computer that data is lost.
- To save data that can be accessed again or sent across a network you must [serialize](https://en.wikipedia.org/wiki/Serialization) it using a [data exchange format](https://en.wikipedia.org/wiki/Data_exchange#Popular_languages_used_for_data_exchange) 



---

## Deserialization


- Likewise, when you load data from an external source it arrives as plain text. For example, [`data`](../datasets/cat-facts.json) returned from this [random cat facts API](https://catfact.ninja/fact) ([docs](https://catfact.ninja/)) arrives as one large string:


```text
[{"type":"cat", "text":"In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat."}, {"type":"cat","text":"When a cats rubs up against you, the cat is marking you with it's scent claiming ownership."}];
```






---

## Deserialization

- Before you can use external data in your code, you must conversely [*deserialize*](https://developer.mozilla.org/en-US/docs/Glossary/Deserialization) the string into a data structure that Javascript can read and use.
- [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) can be used to convert a string of serialized JSON data into a Javascript Object.

```js
let obj = JSON.parse(str);
console.log(obj[1].text);
// -> "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership."
```


---

## Deserialization

After the above, the JSON string has now been deserialized, and is an object that Javascript can use.

```json
[{
	"type": "cat",
	"text": "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat."
}, {
	"type": "cat",
	"text": "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership."
}]
```

You can also convert a Javascript Object back to a string with [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

```js
console.log(JSON.stringify(str)); // -> "[{"type":"cat","text":"In the original Italian version ... ]"
```





---

## Load data with Fetch

- Javascript's [`Fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is the most common method to load external data over HTTP.
- Fetch is asynchronous, and return a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object, which is **resolved** once the asynchronous response has been received.

```js
// fetch requests an external resource from endpoint
fetch('https://catfact.ninja/fact')
    // then passes response to next item in chain
	.then(response => { 
        // log the entire response object stored in variable
        console.log(response);
        // -> 200, "OK"
	    console.log(response.status, response.statusText);     
    });
```

---

## Load data with Fetch



- To use the data that fetch returns we must deserialize the `response.body` with [`response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json) 
- Demo: [Why do we need asynchronous code?](https://codepen.io/owenmundy/pen/dyKMRBN?editors=0011) on codepen



```js
fetch('https://catfact.ninja/fact') 
    .then(response => {
		// parse response.body (convert to JSON), pass to next
        return response.json();  
    })
    // data = deserialized response body
    .then(data => { 
        console.log(data); 
    });
```





---

## Fetch examples

1. [Fetch (simple) => catfact.ninja](https://codepen.io/owenmundy/pen/QWYpZzL?editors=1011)
1. [Fetch in a function (randomuser.me)](https://codepen.io/owenmundy/pen/dyKOveX?editors=1011)
1. [Fetch in a function - Asynchronous code demo](https://codepen.io/owenmundy/pen/dyKMRBN)
1. [More fetch() examples](https://omundy.github.io/learn-javascript/topics/data/demos/fetch.html)




---

## Cross-Origin Resource Sharing

- Cross-Origin Resource Sharing (a.k.a. [CORS policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) control how Javascript *in the browser* can access external resources.
- Without CORS, any website you visit could access your local filesystem! `file:///Users/username/allYourPersonalData`
- Unless [explicitly enabled by the host](https://expressjs.com/en/resources/middleware/cors.html) defaults are...



---

## CORS error message

If you see the following error it likely means you are trying to load data:

- from a server or API that doesn't allow cross-origin requests
- from your local file system `file:///` or `C:`

<pre><code class="slides-small">Access to fetch at 'remote-url' from origin 'your-url' has been blocked by CORS policy
No 'Access-Control-Allow-Origin' header is present on the requested resource.</code></pre>



---

## CORS Rules

- You **can** import files [from the same origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as the file you are importing it into.
    - ✅ script at `https://foo.com` ***can*** access `https://foo.com/data.json` (they have the same origin)
- You **cannot** import data ***across*** origins without permission.
    - 🚫 script at `https://foo.com` ***cannot*** access a resource at a different origin `https://bar.com/data.json`
- You **cannot** import data using the ***file://*** protocol, even with the same origin.
    - 🚫 script at `file:///Users/username/coolwebsite/index.html` ***cannot*** fetch() `file:///Users/username/coolwebsite/data.json` because ['URL schemes must be "http" or "https" for CORS request'](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)




---

## How to fix CORS (simple)

If you are loading a `.json` file from within your own project, just change the file type and store the data as an object in a Javascript variable:

<div class="twocolumn">
<div class="col">

e.g. `data.json` 

```json
{
    "key": "value"
}
```

</div>
<div class="col">

...becomes `data.js` with a variable

```js
let data = {
    "key": "value"
}
```

</div>
</div>



---

## Test for CORS

1. Open a page that uses remote data (e.g. Bootstrap or Google Fonts)
2. Open DevTools, click on the Network tab, and refresh the page
3. Select a Bootstrap file in the resources list.
4. Under Headers, look for `Access-Control-Allow-Origin`: 
    - ✅ A wildcard `*` (asterisk) = all requests are accepted.
    - 🚫 If not set, then cross-origin is not allowed 
5. Run these in the console and repeat #4 for each resource. Also see [this tester](https://cors-test.codehappy.dev)

```js
fetch("https://github.com").catch(e => console.log(e)); // 🚫
fetch("https://cdn.jsdelivr.net/").catch(e => console.log(e)); // 🚫
fetch("https://cdn.jsdelivr.net/npm/").catch(e => console.log(e)); // ✅
```




---

## How to fix CORS

Unless the remote host has explicitely banned cross-origin requests


 you are using remote data you will need to 

To get around this while you are developing locally, you can do one of the following:

- Upload your files to a web server => Commit and push your code to Github.io each time you make a change. This can be very tedious.
- Run a web server on your own computer and test locally (see next slide)




---

## How to run a web server

There are several ways to do this.

<div class="twocolumn">
<div class="col">

Quick:

- With Node:
	[`npm i -g serve`](https://www.npmjs.com/package/serve) and `serve <dir>`
- With Python: <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#running_a_simple_local_http_server" target="_blank">python -m SimpleHTTPServer</a>


</div>
<div class="col">

Long term solutions:

- Enable Apache or Nginx on your personal computer (a.k.a. "localhost") <a href="https://tintinve.medium.com/serving-a-local-website-from-apache2-on-macos-big-sur-11-1-2021-472f8acea8a0" target="_blank">Configuring Apache2 on macOS Big Sur 11.1 (2021)</a>


<!-- - Advanced: [Create a proxy server and run it on a live server (e.g. Heroku)](https://github.com/omundy/sample-node-proxy-server) -->


</div>
</div>






---

## Load data with D3 (.json, .csv, ...)

D3's `d3-fetch` module provides [several methods](https://github.com/d3/d3-fetch/tree/v2.0.0) to load and deserialize external data via HTTP request. For more information see the [documentation](https://github.com/d3/d3/blob/master/API.md) or this [Data Loading in D3](https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js) tutorial.

Install D3 in your HTML
```html
<script src="https://d3js.org/d3-dsv.v2.min.js"></script>
<script src="https://d3js.org/d3-fetch.v2.min.js"></script>
```



---

## Load data with D3 (.json, .csv, ...)

[`d3.json()`](https://github.com/d3/d3-fetch/tree/v2.0.0) return a Javascript object from JSON
```js
// as of v5 D3 uses a promise-based syntax
d3.csv("/path/to/file.csv").then(function(data) {
	console.log(data); // use data here
});
```

[`d3.csv()`](https://github.com/d3/d3-fetch/tree/v2.0.0) return a Javascript object from CSV
```js
d3.csv("/path/to/file.csv").then(function(data) {
	console.log(data); // use data here
});
```



Several other CSV parsers exist, including:

- [jquery-csv](https://github.com/typeiii/jquery-csv) - a jQuery CSV parser (returns a 2D array from CSV string)
- [CSV](https://github.com/vanillaes/csv) - a universal JavaScript CSV parser (returns a 2D array from CSV string)





---

## Loading data from Google Sheets


I cover this in a video [How to export JSON data from google sheets](https://youtu.be/z1lFmwKgzNY) (34:00)


#### Method 1 - Download it manually

While the easiest to start, it will quickly become tedious if you plan to update your spreadsheet often.

1. In Google Sheets, choose File > Download > Comma-separated values
1. Move the CSV file into your project and import it directly using one of the above methods, or [convert it permanently to JSON](#data-conversion).


---

#### Method 2 – Make it publicly accessible

Fairly simple to implement, this method allows you to reimport your data instantly with a single command line script. See [`sample-node-tools/node-projects/export-google-sheets`](https://github.com/omundy/sample-node-tools/tree/main/node-projects/export-google-sheets) for a working example.

1. Install code
1. Make your Google Sheet publicly accessible and publish it to the web
1. Define the spreadsheet URL (see this [guide](https://sites.google.com/view/metricrat-ai2/guides/use-gviz-to-get-and-query-google-sheet-data)) or optionally, the [query documentation](https://developers.google.com/chart/interactive/docs/querylanguage). Also see this [post](https://stackoverflow.com/questions/33713084/download-link-for-google-spreadsheets-csv-export-with-multiple-sheets/33727897#33727897))
1. Fetch and return JSON data


---

#### Method 3 - Use the Google Sheets API

This is the most involved method. See their [tutorial](https://developers.google.com/sheets/api/quickstart/nodejs) and [documentation](https://developers.google.com/sheets/api).

1. [Enable the Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs)
	1. Give it an obvious name
	1. Choose Desktop as the client
	1. Download the client configuration and save the file `credentials.json` to your working directory.
1. [Install the client library](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_install_the_client_library)
1. [Set up the sample](https://developers.google.com/sheets/api/quickstart/nodejs#step_2_set_up_the_sample) and name it `quickstart.js`
1. [Run the sample](https://developers.google.com/sheets/api/quickstart/nodejs#step_3_run_the_sample)






---

### How to get data from an API

See https://omundy.github.io/learn-computing/slides/data-apis.html



---

## Tips for writing code using APIs

Using remote data adds latency and points where problems can occur:

- Start with a tool that makes it easy to see what is returned. For example, test that your requests work in the browser or Postman
- Save sample responses (test data) locally to develop your application without bumping into a rate limit.
- **APIs introduce latency** so use asynchronous programming (`async`/`await`, promises, etc.)
- Many APIs use **rate limiting** to prevent abuse. They identify your requests using your key.







---

## Data Storage

Considerations for using data in a project:

1. Is your data `static` (unchanging) or `dynamic` (and how often does it changes)?
1. Do you need to `insert` or `update` data (from users, a scraper, or other means)?
1. Will you need to `query` the data (by searching, sorting, etc.)?
1. How much data will you need to `store` or `request` across a network?
1. What data `formats` do you have / will you need?
1. Do you need to `clean` or `transform` your data?
1. Do all of your datasets need to be treated the same?

---

## Example storage situations:

- I have a spreadsheet (`static`), with many columns I don't need (not `clean`)
- I want users to be able to (`dynamic`) add (`insert`) or edit (`update`) content
- I want to use live data (`dynamic`) via a remote API (`request`)





---

## Static vs. Dynamic

- Static data is content that you download into your own project and doesn't change. You can clean, modify, or improve it to make it easier to use in your project.
- Dynamic data is always changing. It could be due to users editing content, or sensor readings from a weather station. To use dynamic data you'll need to evaluate how often you need to update your own content, whether you'll save data, based on the needs of your project.



---

## Flat files vs. Databases

- A "flat file" is any single or collection of plain text files that stores data (e.g. CSV, TSV, JSON, etc.) They are easy to write, transform, or transmit, but since they must be read from memory they are slow and difficult to `query`.
- A database requires some additional work to set up the software and write the code that uses it. The benefit is that it is easy to `insert`, `update`, and `query` your data.
- [How to install MySQL on MacOS](https://flaviocopes.com/mysql-how-to-install/)





---

## Browser-based storage

- localStorage - For Storing data locally in your users' browser. Can be used by extensions or websites.
- cookies - Another form of storage, typically used to identify users who are logged-in to an application.

See https://omundy.github.io/learn-javascript/topics/data-persistence/slides.html










---

## Data Cleaning

See https://omundy.github.io/learn-computing/slides/data-cleaning.html




## Data Conversion

### Convert CSV to JSON

1. Download a CSV from your spreadsheet
1. Use Node and [csvtojson](https://www.npmjs.com/package/csvtojson) to convert the file
1. Save as a file using [`writeFile`](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)



---

For example, to convert this file [`../datasets/temps.csv`](../datasets/temps.csv)

```data
C, F, description
-273.15, -459.67, absolute zero temperature
0, 32.0, freezing/melting point of water
21, 69.8, room temperature
37, 98.6, average body temperature
100, 212, boiling point of water
```

to deserialized Javascript code, two-dimensional array would be the closest equivalent data structure in Javascript for tabular data.

```js
const tempsArr = [
	['C', 'F', 'description']
	['-273.15', '-459.67', 'absolute zero temperature'],
	['0', '32.0', 'freezing/melting point of water'],
	['21', '69.8', 'room temperature'],
	...
];
```


---

Convert data to a JS object can make it easier to use. Below, each row can be referenced using their their keys, and numbers have been retyped.

```js
const tempsObjectsArr = [
	{
		C: -273.15,
		F: -459.67,
		description: 'absolute zero temperature'
	},{
		C: 0,
		F: 32.0,
		description: 'freezing/melting point of water'
	},{
		C: 21,
		F: 69.8,
		description: 'room temperature'
	}
	...
];
console.log(`${tempsObjectsArr[2].description} is about ${tempsObjectsArr[2].F} F`);
// -> 'room temperature is about 69.8 F'
```







---

## Resources 

- ([Working with Data & APIs in Javascript](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)) by Daniel Shiffman


