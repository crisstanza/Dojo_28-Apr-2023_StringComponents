(function () {

	const init = () => {
		const settings = {
			include: [
				ExampleTester,
				NewLineStringBuilderTester,
				TextBoxBuilderTester,
			],
			output: document.getElementById('output')
		};
		new JSus(settings).start();
	};

	window.addEventListener('load', init, false);

})();
