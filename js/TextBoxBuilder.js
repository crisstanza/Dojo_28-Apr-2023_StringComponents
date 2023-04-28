class TextBoxBuilder {
	#builder;
	#settings;
	// constructor(settings) {
	// 	console.log('TextBoxBuilder.constructor(' + JSON.stringify(settings) + ')');
	// }

	constructor(settings) {
		this.#builder = new NewLineStringBuilder();
		this.#settings = settings;
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
		let mappedLines = this.#builder.lines.map(line => {
			let emptyChar = largestLine.length - line.length;
			for (let index = 0; index < emptyChar; index++) {
				line += ' ';
			}
			return '=' + line + '=';
		});
		let lid = '='.repeat(largestLine.length + 2);
		mappedLines.unshift(lid);
		mappedLines.push(lid);
		return mappedLines.join('\n');
	}

}
