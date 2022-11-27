
// "private" var
const hello = "Hello, World!";
// return hello
export const sayHello = () => hello;

// return string repeated three times
export const repeat = (string) => `${string} ${string} ${string}`;

// return string UPPERCASE
export function shout(string) {
	return `${string.toUpperCase()}!`;
}
