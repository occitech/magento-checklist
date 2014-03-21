var _app = new app();

casper.test.begin('Demo store notice ?', 1, function suite(test) {
	_app.skipIrrelevantTest(test, 1, 'demo_notice');

	var in_production = _app.is_production || false;
	casper.start(_app.base_url, function () {
		if (in_production) {
			test.assertDoesntExist(_app.selectors.demo_notice, 'The demo notice is not visible');
		} else {
			test.assertExist(_app.selectors.demo_notice, 'The demo notice is visible');
		}
	}).run(function() {
		test.done();
	});
});
