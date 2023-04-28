class TextBoxBuilderTester {

	#builder;

	static data() {
		return {
			testOne: [
				{ input: 'a', expected: '===\n=a=\n===' }
			],
			// testTwo: [
			// 	{
			// 		input: {
			// 			settings: { top: '-', right: '|', bottom: '-', left: '|' },
			// 			line: 'B'
			// 		},
			// 		expected: '---\n|B|\n---'
			// 	},
			// 	{
			// 		input: {
			// 			settings: { top: '-', right: '|', bottom: '-', left: '|' },
			// 			lines: [
			// 				{ text: 'aaBBcc', align: 'left' },
			// 				{ text: 'bb', align: 'center' }
			// 			]
			// 		},
			// 		expected: '--------\n|aaBBcc|\n|  bb  |\n--------'
			// 	}
			// ]
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

	// testTwo(input, expected) {
	// 	this.#builder.append(input);
	// 	const current = this.#builder.toString();
	// 	JSus.assertEquals(expected, current);
	// }

}
