

/**
 *	A fetch example
 */

// REFERENCES
// https://www.npmjs.com/package/node-fetch
// https://web.dev/promises/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const fetch = require('node-fetch');


// // fetch the contents of a web page
// fetch('https://github.com/')
// 	.then(res => res.text())
// 	.then(body => console.log(body));

// fetch JSON data
fetch('https://api.github.com/users/github')
	.then(res => res.json())
	.then(json => console.log(json));

// fetch JSON data
fetch('https://tallysavestheinternet.com/api/feed/range/plusStream/1/minute')
	.then(res => res.json())
	.then(json => {
		// console.log(json)
		// console.log(json[0].score);
		for(let i=0; i<json.length; i++){
			console.log(json[i].score)
		}

	});
