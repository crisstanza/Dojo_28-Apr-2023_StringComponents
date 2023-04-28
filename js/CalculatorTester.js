class CalculatorTester {

	#calculator;

	constructor() {
		this.#calculator = new Calculator();
	}

	static data() {
		return {
			testSum: [
				{ input1: 10, input2: 20, expected: 30 }
			]
		};
	}

	testMul() {
		const current = this.#calculator.mul(3, 2);
		const expected = 6;
		JSus.assertEquals(expected, current);
	}

	testSum(input1, input2, expected) {
		const current = this.#calculator.sum(input1, input2);
		JSus.assertEquals(expected, current);
	}

}
