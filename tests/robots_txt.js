var _app = new app();

casper.test.begin('A robots.txt file exists', 1, function suite(test) {
	var robots_txt_url = _app.base_url + '/robots.txt';

	casper.start(robots_txt_url, function () {
		test.assertHttpStatus(200, 'A robots.txt exists at ' + robots_txt_url);
	}).run(function() {
		test.done();
	});
});
