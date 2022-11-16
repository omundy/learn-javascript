// SEE README FOR INFO

// add packages required for server
const fetch = require("node-fetch");
const express = require('express');
const app = express();
const port = 3000;

// this is the default api endpoint
app.get('/api', async (req, res) => {
	res.json({
		"message": "server is live"
	});
});

// this is the data api endpoint
app.get('/api/:textToTranslate?', async (req, res) => {
	// if required text is not present
	if (!req.params.textToTranslate) {
		// return early with message
		res.json({
			"message": "no text received"
		});
		console.log("No textToTranslate");
		return;
	}
	// ... otherwise ....
	console.log(req.params.textToTranslate);
	// fetch remote api data
	await fetch("https://randomuser.me/api/")
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			// ... return to user
			res.json(data);
		});
});
// getData();


// sets up path to serve static files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// starts the server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
