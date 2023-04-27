class CalculatorTester {

	#calculator;

	constructor() {
		this.#calculator = new Calculator();
	}

	static data() {
		return {
			testTwo: [
				{ input1: 10, input2: 20, expected: 30 }
			]
		};
	}

	testOne() {
		const current = this.#calculator.sum(1, 2);
		const expected = 3;
		JSus.assertEquals(expected, current);
	}

	testTwo(input1, input2, expected) {
		const current = this.#calculator.sum(input1, input2);
		JSus.assertEquals(expected, current);
	}

}
