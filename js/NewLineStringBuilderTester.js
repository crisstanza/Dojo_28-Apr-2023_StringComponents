class NewLineStringBuilderTester {

	#builder;

	constructor() {
		this.#builder = new NewLineStringBuilder();
	}

	static data() {
		return {
			testOneLine: [
				{ input: 'a', expected: 'a' },
				{ input: 'Lorem.', expected: 'Lorem.' },
			],
			testClean: [
				{ input: 'x', expected: '' },
			]
		};
	}

	static beforeClass() { }
	before() { }
	after() { }
	static afterClass() { }

	testOneLine(input, expected) {
		this.#builder.append(input);
		const current = this.#builder.toString();
		JSus.assertEquals(expected, current);
	}

	testTwoLines() {
		this.#builder.append('a');
		this.#builder.append('b');
		const current = this.#builder.toString();
		JSus.assertEquals('a\nb', current);
	}

	testClean(input, expected) {
		this.#builder.append(input);
		this.#builder.clean();
		const current = this.#builder.toString();
		JSus.assertEquals(expected, current);
	}

}
