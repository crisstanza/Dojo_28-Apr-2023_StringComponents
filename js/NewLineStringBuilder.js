class NewLineStringBuilder {
	#lines;

	constructor() {
		this.#lines = [];
	}

	append(value) {
		this.#lines.push(value);
	}

	toString() {
		return this.#lines.join('\n');
	}

	// TODO: create and implement method clean()
}
