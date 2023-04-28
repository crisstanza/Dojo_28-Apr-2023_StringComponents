class TextBoxBuilderTester {

	#builder;

	static data() {
		return {
			testOne: [
				{ input: 'a', expected: '===\n=a=\n===' },
			],
			testLotsOfLines: [
				{ input: ['a', 'b'], expected: '===\n=a=\n=b=\n===' },
				{ input: ['a', 'bb'], expected: '====\n=a =\n=bb=\n====' },
			],
			testLotsOfLinesMoreThanOnce: [
				{ input: ['a', 'bb'], expected: '====\n=a =\n=bb=\n====' },
			],
			testSettings: [
				{
					input: {
						settings: { top: '-', right: '|', bottom: '-', left: '|' },
						lines: [{ text: 'B' }]
					},
					expected: '---\n|B|\n---'
				},
				{
					input: {
						settings: { top: '-', right: '|', bottom: '-', left: '|' },
						lines: [
							{ text: 'aaBBcc', align: 'left' },
							{ text: 'bb', align: 'center' }
						]
					},
					expected: '--------\n|aaBBcc|\n|  bb  |\n--------'
				},
				{
					input: {
						settings: { top: '=', right: '=', bottom: '=', left: '=', padding: true },
						lines: [{ text: 'a' }]
					},
					expected: '=====\n= a =\n====='
				},
			],
		};
	}

	before(input, _expected) {
		this.#builder = new TextBoxBuilder(input.settings);
	}

	testOne(input, expected) {
		this.#builder.append(input);
		const current = this.#builder.toString();
		JSus.assertEquals(expected, current);
	}

	testSettings(input, expected) {
		input.lines.forEach(line => this.#builder.append(line.text, line.align));
		const current = this.#builder.toString();
		JSus.assertEquals(expected, current);
	}

	testLotsOfLines(input, expected) {
		input.forEach(line => this.#builder.append(line));
		const current = this.#builder.toString();
		JSus.assertEquals(expected, current);
	}

	testLotsOfLinesMoreThanOnce(input, expected) {
		input.forEach(line => this.#builder.append(line));
		let current = this.#builder.toString();
		JSus.assertEquals(expected, current);
		current = this.#builder.toString();
		JSus.assertEquals(expected, current);
	}

}
