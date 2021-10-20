
← [Learn Javascript](../README.md)

# Javascript – Working with Data

"<em>Above all else, show the data.</em>"– Edward R. Tufte


<!-- TOC depthFrom:2 depthTo:4 withLinks:1 updateOnSave:1 orderedList:0 -->

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
		- [Example APIs](#example-apis)
- [Data Storage](#data-storage)
	- [Static vs. Dynamic](#static-vs-dynamic)
	- [Flat files vs. Databases](#flat-files-vs-databases)
	- [Browser-based storage](#browser-based-storage)
- [Data Cleaning](#data-cleaning)
- [Data Conversion](#data-conversion)
	- [Convert CSV to JSON](#convert-csv-to-json)
- [FAQ & Tips](#faq-tips)
- [Other Tutorials](#other-tutorials)

<!-- /TOC -->










## Data Collections

In addition to [primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) like `boolean`, `number`, and `string`, Javascript has types classified as data collections, which can include `arrays`, `objects`, as well as more complex entities, hierarchical collections, and lists.

A Javascript array

```js
let primaries = ["red", "green", "blue"];
```

A Javascript object. Note, Arrays and objects can be used together, such as here where multiple similar objects ("albums") are collected together.

```js
var singer = {
    "name": "Bruce Springsteen",
    "albums": [
        {
            "name": "Born to Run",
            "year": 1975
        }, {
            "name": "Born in the U.S.A.",
            "year": 1984
        }, {
            "name": "The Ghost of Tom Joad",
            "year": 1995
        }
    ]
};
```

See these lessons for more on arrays, objects, and other collections.

- [Learn Javascript / Data Structures](../../javascript-1/1-4-data-structures/data-structures.md)
- [Learn Computing / Data Types / Data Collections](https://github.com/omundy/learn-computing/blob/main/topics-data-types.md#data-collections)








## Data Exchange Formats

Data collections can be stored inside code files, or more often, imported from external files, databases, or API servers. Data exchange formats help to standardize how data is stored and transmitted when you import external data and generally fall into one of the below categories:

1. Tabular data exchange formats (e.g. `CSV`, `TSV`)

```
"make", "model", "year"
"Pontiac", "Vibe", 2009
"Honda", "Fit", 2007
"Chevrolet", "Blazer", 2000
"Toyota", "RAV4", 1999
```

1. Hierarchical data exchange formats (e.g. `JSON` or `XML`).

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
        }, {
            "make": "Toyota",
            "model": "RAV4",
            "year": 1999
        }]
}
```

See this lesson for more on data exchange formats

- [Learn Computing / Data Types / Data Exchange Formats](https://github.com/omundy/learn-computing/blob/main/topics-data-types.md#data-exchange-formats)








## Using External Data

There are two important concepts to know about when importing external data into your program:

- Your program must be given **access** to the data by the [CORS policy](#cross-origin-resource-sharing) of the data host.
- A `json` file is plain text, and so it must be **deserialized** and stored in computer memory to use it.





### Cross-Origin Resource Sharing

Cross-Origin Resource Sharing (a.k.a. [CORS policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) control how Javascript *in the browser* can access external resources. Unless [explicitly enabled by the host](https://expressjs.com/en/resources/middleware/cors.html) defaults are:

- You **can** import files [from the same origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as the file you are importing it into.
    - ✅ - a script at `https://foo.com` ***can*** access a file at `https://foo.com/data.json` because they have the same origin.
- You **cannot** import data *across* origins without permission.
    - 🚫 - a script at `https://foo.com` ***cannot*** access a resource at a different origin `https://bar.com/data.json`
- You **cannot** import data using the *file://* protocol, even with the same origin.
    - 🚫 - a script at `file:///Users/username/coolwebsite/index.html` ***cannot*** fetch() `file:///Users/username/coolwebsite/data.json` because ['URL schemes must be "http" or "https" for CORS request'](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)

Just imagine if any website you visited could access this location! `file:///Users/username/allYourPersonalData`



### How to fix CORS

If you see the following error it likely means you are trying to access an API on a server that hasn't enabled CORS.

```text
Access to fetch at '<remote-url>' from origin '<your-website-url>' has been blocked by CORS policy
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

To get around this while you are developing locally, you can do one of the following:

- Run a web server on your own computer and test locally
    - Beginner: Enable Apache (a.k.a. "localhost") on your computer:
        - [Configuring Apache2 on macOS Big Sur 11.1 (2021) to serve a local website.](https://tintinve.medium.com/serving-a-local-website-from-apache2-on-macos-big-sur-11-1-2021-472f8acea8a0)
    - Advanced: [Create a proxy server and run it on a live server (e.g. Heroku)](https://github.com/omundy/sample-node-proxy-server)
- Upload your files to a web server to test
    - Essentially, commit and push your code to Github.io each time you make a change. This can be very tedious.








### Serialization and Deserialization

Data imported from an external source is technically a `string` when Javascript loads it. Data that is in text form, or [serialized](https://en.wikipedia.org/wiki/Serialization) into a [data exchange format](https://en.wikipedia.org/wiki/Data_exchange#Popular_languages_used_for_data_exchange), can be stored or sent across a network as a single entity.

For example, [`data`](../datasets/cat-facts.json) returned from this [random cat facts API](https://cat-fact.herokuapp.com/facts/random) ([docs](https://alexwohlbruck.github.io/cat-facts/docs/)) is just one large string:

```string
const str = '[{"type":"cat","text":"In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat."},{"type":"cat","text":"Cats mark you as their territory when they rub their faces and bodies against you, as they have scent glands in those areas."},{"type":"cat","text":"When a cats rubs up against you, the cat is marking you with it's scent claiming ownership."}]';
```

Before you can use external data in your code, you must conversely [*deserialize*](https://developer.mozilla.org/en-US/docs/Glossary/Deserialization) the string into a data structure that Javascript can read and use.

For example, [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) can be used to convert a string of serialized JSON data into a Javascript Object.

```js
let obj = JSON.parse(str);
console.log(obj[2].text);
// -> "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership."
```

After the above, the JSON string has now been deserialized, and is an object that Javascript can use.
```json
[{
	"type": "cat",
	"text": "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat."
}, {
	"type": "cat",
	"text": "Cats mark you as their territory when they rub their faces and bodies against you, as they have scent glands in those areas."
}, {
	"type": "cat",
	"text": "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership."
}]
```

You can also convert a Javascript Object back to a string with [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
```js
console.log(JSON.stringify(str)); // -> "[{"type":"cat","text":"In the original Italian version ... ]"
```







## Loading External Data


### Fetch

[`Fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is the most common method to load (or send) external data in Javascript. You start with an HTTP request, passing in the URI for your resource. Fetch is asynchronous, and will first return a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object, which will then be resolved upon the eventual completion (or failure) of the asynchronous operation.

```js
fetch('https://cat-fact.herokuapp.com/facts/random').then(response => console.log(response));
// -> Promise {<pending>}
// -> Response {type: "cors", url: "https://cat-fact.herokuapp.com/facts/random", redirected: false, status: 200, ok: true, ...}
```

In order to use the data that fetch returns we must deserialize the `response.body` with [`response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
```js
fetch('https://cat-fact.herokuapp.com/facts/random') // request external resource
    .then(response => {
		console.log(response); // the response object
	    console.log(response.status, response.statusText); // -> 200, "OK"
        return response.json(); // parse response.body (convert to JSON), pass to next .then()
    })
    .then(data => { // data = the deserialized data of the external file
        console.log(data); // log the object
    });
```
![fetch](../../assets/img/demo-fetch.png)




### D3 (.json, .csv, ...)

D3's `d3-fetch` module provides [several methods](https://github.com/d3/d3-fetch/tree/v2.0.0) to load and deserialize external data via HTTP request. For more information see the [documentation](https://github.com/d3/d3/blob/master/API.md) or this [Data Loading in D3](https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js) tutorial.

Install D3 in your HTML
```html
<script src="https://d3js.org/d3-dsv.v2.min.js"></script>
<script src="https://d3js.org/d3-fetch.v2.min.js"></script>
```

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







### Loading data from Google Sheets


I cover this in a video [How to export JSON data from google sheets](https://youtu.be/z1lFmwKgzNY) (34:00)


#### Method 1 - Download it manually

While the easiest to start, it will quickly become tedious if you plan to update your spreadsheet often.

1. In Google Sheets, choose File > Download > Comma-separated values
1. Move the CSV file into your project and import it directly using one of the above methods, or [convert it permanently to JSON](#data-conversion).


#### Method 2 – Make it publicly accessible

Fairly simple to implement, this method allows you to reimport your data instantly with a single command line script. See [`sample-node-tools/node-projects/export-google-sheets`](https://github.com/omundy/sample-node-tools/tree/main/node-projects/export-google-sheets) for a working example.

1. Install code
1. Make your Google Sheet publicly accessible and publish it to the web
1. Define the spreadsheet URL (see this [guide](https://sites.google.com/view/metricrat-ai2/guides/use-gviz-to-get-and-query-google-sheet-data)) or optionally, the [query documentation](https://developers.google.com/chart/interactive/docs/querylanguage). Also see this [post](https://stackoverflow.com/questions/33713084/download-link-for-google-spreadsheets-csv-export-with-multiple-sheets/33727897#33727897))
1. Fetch and return JSON data



#### Method 3 - Use the Google Sheets API

This is the most involved method. See their [tutorial](https://developers.google.com/sheets/api/quickstart/nodejs) and [documentation](https://developers.google.com/sheets/api).

1. [Enable the Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs)
	1. Give it an obvious name
	1. Choose Desktop as the client
	1. Download the client configuration and save the file `credentials.json` to your working directory.
1. [Install the client library](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_install_the_client_library)
1. [Set up the sample](https://developers.google.com/sheets/api/quickstart/nodejs#step_2_set_up_the_sample) and name it `quickstart.js`
1. [Run the sample](https://developers.google.com/sheets/api/quickstart/nodejs#step_3_run_the_sample)








### How to get data from an API

Basic tips for working with APIs...

1. Read the documentation
	- Many APIs require that you register and make requests using a key or token.
		- For example, when [requesting data](https://pro.dp.la/developers/requests#url) from the [DPLA](https://dp.la/) you must include your `api_key` in the request `https://api.dp.la/v2/items?q=kittens&api_key=<here>`
	- Many APIs use rate limiting to prevent abuse. They identify your requests using your key.
1. Start with a tool that makes it easy to see what is returned:
	- Use the browser + [JSON Viewer extension](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US) to see the structure of the returned data
	- Use [Postman](https://www.postman.com/) for even more advanced API testing
1. Make sure your requests work in the browser or Postman before you start coding
 	- Save sample responses (test data) locally so you can develop your application without bumping into a rate limit.
1. Things to remember
	- APIs introduce latency so use asynchronous programming (`async`/`await`, promises, etc.)
	- If your code isn't working check that the API is returning results using a browser or Postman.
	- APIs are always changing based on needs and resources. In the early days of Facebook and Instagram anyone (artists, researchers, [anti-press authoritarian governments](https://www.scu.edu/ethics-spotlight/social-media-and-democracy/weaponization-of-social-media-by-authoritarian-states/)) could collect entire databases via their APIs. Thanks to various [cultural](https://iknowwhereyourcatlives.com/) works [this](https://givememydata.com/) is no longer the case.


#### Example APIs

- [JSON Placeholder](https://jsonplaceholder.typicode.com/) - Free fake API for testing and prototyping.
- [Public APIs](https://github.com/public-apis/public-apis) - A collective list of free APIs for use in software and web development
- [Data / Functionality API Resource List](https://docs.google.com/spreadsheets/d/196CgwxBIkX5v6VeitOFWTYfd07OU_5A-HC4Gu7gy6xE/edit#gid=0) - My own list
- [Digital Public Library of America API](https://pro.dp.la/developers/api-codex)


















## Data Storage

When you use data in a project you should address which of the following applies to your application:

1. Is your data **static** (unchanging) or **dynamic** (and how often does it changes)?
1. Do you need to **insert** or **update** data (from users, a scraper, or other means)?
1. Will you need to **query** the data (by searching, sorting, etc.)?
1. How much data will you need to **store** or **request** across a network?
1. What data **formats** do you have / will you need?
1. Do you need to **clean** or **transform** your data (e.g. some fields are incorrect or need to be altered)?
1. Do all of your datasets need to be treated the same?

Some example situations:

- I already have a spreadsheet, but it has many columns I do not need; It is `static` not `clean`
- I want users to be able to add, edit, and search content; It is `dynamic`, I need to `insert`, `update`, and `query`
- I want to use live data via a remote API; It is `dynamic` accessed via a `request`




### Static vs. Dynamic

- Static data is content that you download into your own project and doesn't change. You can clean, modify, or improve it to make it easier to use in your project.
- Dynamic data is always changing. It could be due to users editing content, or sensor readings from a weather station. To use dynamic data you'll need to evaluate how often you need to update your own content, whether you'll save data, based on the needs of your project.

### Flat files vs. Databases

- A "flat file" is any single or collection of plain text files that stores data (e.g. CSV, TSV, JSON, etc.) They are easy to write, transform, or transmit, but since they must be read from memory they are slow and difficult to `query`.
- A database requires some additional work to set up the software and write the code that uses it. The benefit is that it is easy to `insert`, `update`, and `query` your data.

https://flaviocopes.com/mysql-how-to-install/

### Browser-based storage

- localStorage - For Storing data locally in your users' browser. Can be used by extensions or websites.
- cookies - Another form of storage, typically used to identify users who are logged-in to an application.











## Data Cleaning


Moved to https://github.com/omundy/learn-computing/blob/main/topics-data-cleaning.md





## Data Conversion

### Convert CSV to JSON

1. Download a CSV from your spreadsheet
1. Use Node and [csvtojson](https://www.npmjs.com/package/csvtojson) to convert the file
1. Save as a file using [`writeFile`](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)





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

Depending on your application you may want to convert your data to a Javascript object to make it easier to use. Below, each row has been converted so that the column values can be referenced by their keys, and those which are numbers have been retyped from a `string` to `number` type.

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











## FAQ & Tips




## Other Tutorials

- Daniel Shiffman's - Working with Data & APIs in Javascript ([playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X))
	- [Introduction](https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=1) and [Setup](https://www.youtube.com/watch?v=hPbDyqzxQfU&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=2)
	- [1.1 fetch()](https://www.youtube.com/watch?v=tc8DU14qX6I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=3)
	- [1.2 Tabular Data](https://www.youtube.com/watch?v=RfMkdvN-23o&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=4)
	- [1.3 Graphing with Chart.js](https://www.youtube.com/watch?v=5-ptp9tRApM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=5)
	- [1.4 JSON](https://www.youtube.com/watch?v=uxf0--uiX0I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=6)
	- [1.6 Refreshing Data with setInterval()](https://www.youtube.com/watch?v=jKQUHGpOHqg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=8)
	- [2.1 Server-side with Node.js](https://www.youtube.com/watch?v=wxbQP1LMZsw&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=9)
	- [2.2 Geolocation Web API](https://www.youtube.com/watch?v=3ls013DBcww&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=10)
	- [2.3 HTTP Post Request with fetch()](https://www.youtube.com/watch?v=Kw5tC5nQMRY&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=11)
	- [2.4 Saving to a Database](https://www.youtube.com/watch?v=xVYa20DCUv0&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=12)
	- [2.5 Database Query](https://www.youtube.com/watch?v=q-lUgFxwjEM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=13)
	- [2.6 Saving Images and Base64 Encoding](https://www.youtube.com/watch?v=9Rhsb3GU2Iw&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=14)
	- [2.7 Project Wrap-up: Accessibility and Design](https://www.youtube.com/watch?v=1mnpn6q25FI&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=15)
	- [3.1 API calls from Node.js (Weather data from Dark Sky)](https://www.youtube.com/watch?v=ZtLVbJk7KcM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=16)
	- [3.2 Open Air Quality API in Node.js](https://www.youtube.com/watch?v=Tiot877orkU&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=17)
	- [3.3 Mapping Database Entries with Leaflet.js](https://www.youtube.com/watch?v=r94kI6my0QQ&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=18)
	- [3.4 Hiding API Keys with Environment Variables (dotenv) and Pushing Code to GitHub](https://www.youtube.com/watch?v=17UVejOw3zA&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=19)
	- [3.5 Web Application Deployment (Glitch and Heroku) ](https://www.youtube.com/watch?v=Rz886HkV1j4&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=20)
