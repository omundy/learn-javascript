/**
 *	Example code from quiz questions in Functions / Scope
 */




var a = 5;

function foo(i) {
	var b = false;
	if (i > 0){
		b = true;
		i = i * 2;
	}
	return i;
}

foo(a);

if (b === true) {
	console.log("SUCCESS");
} else {
	console.log("UH OH");
}
