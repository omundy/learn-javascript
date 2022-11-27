

/**
 *	0. a simple callback example
 */

function theWaitIsOver(str) {
	console.log(str);
}
// this could be a database call, accessing remote files, etc.
function waitForSomething(callback) {
	setTimeout(function() {
		// invoke after latency
		callback("🎉 hooray");
	}, 2000);
}
// pass callback function as a parameter
waitForSomething(theWaitIsOver);
