class TextBoxBuilder {
	#input;
	#settings;

	constructor(settings = { top: '=', right: '=', bottom: '=', left: '=', padding: false }) {
		this.#input = [];
		this.#settings = settings;
	}

	append(value, align = 'left') {
		this.#input.push({
			text: value,
			alignment: align
		});
	}

	toString() {
		let lengths = this.#input.map(input => input.text.length);
		let largestLength = Math.max.apply(Math, lengths);

		let edgePadding = this.#settings.padding ? 4 : 2;
		let textPadding = this.#settings.padding ? ' ' : '';

		let top = this.#settings.top.repeat(largestLength + edgePadding);
		let bottom = this.#settings.bottom.repeat(largestLength + edgePadding);

		let builder = new NewLineStringBuilder();
		builder.append(top);
		this.#input.forEach(input => {
			let text = this.#settings.left
				+ textPadding
				+ this.#align(input, largestLength)
				+ textPadding
				+ this.#settings.right;
			builder.append(text);
		});
		builder.append(bottom);

		return builder.toString();
	}

	#align(input, largestLength) {
		let alignmentLength = largestLength - input.text.length;
		let alignmentText = ' '.repeat(alignmentLength);
		switch (input.alignment) {
			default: //'left'
				return input.text + alignmentText;
			case 'center':
				let left = alignmentText.substring(0, alignmentLength / 2);
				let right = alignmentText.substring(alignmentLength / 2);
				return left + input.text + right;
			case 'right':
				return alignmentText + input.text;
		};
	};

}
