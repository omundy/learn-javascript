

export default class MyClass {

	constructor(greeting) {
		this.CLASS_NAME = "MyClass";
		console.log(`${greeting} from ${this.CLASS_NAME} constructor()`);
	}

	hello() {
		return `hello from ${this.CLASS_NAME} hello()`;
	}

}
