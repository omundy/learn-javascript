// add a new binding to the window object
window.ColorModule = (function() {
	// vars and methods are private by default unless we expose them
	let color = "",
		palette = ["red", "green", "blue"];

	const log = () => {
		console.log(`The current color is ${color}`);
	};

	// this method will be public
	function rand() {
		color = palette[Math.floor(Math.random() * palette.length)];
		log(color);
	}
	// everything we want to be public
	return {
		// expose methods like so
		rand: rand,
		// use getters and setters to expose variables
		get color() {
			return color;
		},
		set color(newColor) {
			color = newColor;
		}
	};
})();
