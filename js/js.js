(function () {

	const init = () => {
		new JSus({
			include: [
				ExampleTester,
				NewLineStringBuilderTester
			], output: document.getElementById('output')
		}).start();
	};

	window.addEventListener('load', init, false);

})();
