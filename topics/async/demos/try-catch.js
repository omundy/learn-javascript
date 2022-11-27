

/**
 *	Try / Catch example
 */



// an example with no errors
try {
	console.log("no errors");
} catch (err) {
	console.error("there was an error!", err);
}

// an example WITH AN ERROR
try {
	ugh
	console.log("no errors");
} catch (err) {
	console.error("there was an error!", err);
}


try {
	setTimeout(() => {
		// this will override catch 
		throw new Error("Woosh");
	}, 20);
} catch (_) {
	// This will not run
	console.log("Caught!");
}
