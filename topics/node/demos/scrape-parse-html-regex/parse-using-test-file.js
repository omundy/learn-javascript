/**
 *	To scrape a website you need to
 *	- Request the html page (using Node to avoid CORS policy)
 * 	- Parse the string returned (which we do with regular expressions below)
 * 	This demo uses a file for the test, then searches for strings with REGEX
 */

// we saved the search results inside a file to make regex tests faster
var filename = "google-cats.html";

// import node's built-in FileSystem lib
var fs = require('fs');

// read the test file
fs.readFile(filename, 'utf8', function(err, html) {
	if (err) console.error(err); // exit early if errors

	// test
	// console.log("the html string =", html);

	// matchAll returns all matches + capture groups
	var titleArr = [...html.matchAll(/>(.*)<\/h3>/gi)];
	// ... but there are two matches for each url
	var urlArr = [...html.matchAll(/"text">(.*)<span/gi)];

	// loop through the object returned
	for (let i = 0; i < titleArr.length; i++) { 
		console.log(titleArr[i][1]);
	}
	for (let i = 0; i < urlArr.length; i++) {
		console.log(urlArr[i][1]);
	}

	// note, this is just an example, so further testing will be required to
	// make sure the urls match the titles ...

});
