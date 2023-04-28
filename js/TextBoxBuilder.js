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
		largestLine;
		this.#builder.lines.forEach(line => {
			if (line.length > largestLine.length) {
				largestLine = line;
			}
		});


	}

}
