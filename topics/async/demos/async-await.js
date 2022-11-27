

/**
 *	A simple async-await example
 */


// function with a promise inside
function waitForPromise(param) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(param);
		}, 2000);
	});
}
async function test() {
	let str = "";
	str += await waitForPromise("🤡");
	console.log(str);
	str += await waitForPromise(" lurks");
	console.log(str);
	str += await waitForPromise(" in the shadows");
	console.log(str);
}
test();
