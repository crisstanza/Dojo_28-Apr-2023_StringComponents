class NewLineStringBuilder {
	#lines;

	constructor() {
		this.#lines = '';
	}

	append(value) {
		this.#lines += value;
	}

	toString() {
		return this.#lines;
	}
}
