// create exports object
var exports = module.exports = {};
// vars and methods are private by default unless we export them
let color = "",
	palette = ["red", "green", "blue"];
const log = () => {
	console.log(`The current color is ${color}`);
};
// expose var using get and set
exports.color = function() {
	return {
		get color() {
			return color;
		},
		set color(newColor) {
			color = newColor;
		}
	};
};
// expose a method
exports.rand = () => {
	color = palette[Math.floor(Math.random() * palette.length)];
	log(color);
};
