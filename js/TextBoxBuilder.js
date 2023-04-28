class TextBoxBuilder {
	#builder;

	// constructor(settings) {
	// 	console.log('TextBoxBuilder.constructor(' + JSON.stringify(settings) + ')');
	// }

	constructor() {
		this.#builder = new NewLineStringBuilder();
	}

	append(value) {
		this.#builder.append(value);
	}

	toString() {
		let largestLine = '';
		this.#builder.lines.forEach(line => {
			if (line.length > largestLine.length) {
				largestLine = line;
			}
		});
		let string = this.#builder.lines.map(line => {
			let emptyChar = largestLine.length - line.length;
			for (let index = 0; index < emptyChar; index++) {
				line += ' ';
			}
			return '='+line+'=';
		});
	}

}
