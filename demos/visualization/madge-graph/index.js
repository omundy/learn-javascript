"use strict";

const madge = require('madge');

let appPath, graphName;

appPath = '/Users/owenmundy/Sites/Tally/_code/tally-api/app.js';
graphName = 'output/graph-tally-api.svg';

appPath = '/Users/owenmundy/Sites/Tally/_code/tally-utilities/convert-all-data/index.js';
graphName = 'output/graph-tally-utilities-convert-data.svg';



madge(appPath)
	.then((res) => res.image(graphName))
	.then((writtenImagePath) => {
		console.log('Image written to ' + writtenImagePath);
	});
