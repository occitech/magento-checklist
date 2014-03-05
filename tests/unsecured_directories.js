var _app = new app();

casper.test.begin('Unsecured directories are safe', _app.unsecure_directories.length, function suite(test) {
	casper.start().each(_app.unsecure_directories, function(self, directory) {
		self.thenOpen(_app.base_url + '/' + directory, function(response) {
			test.assertNot(utils.equals(200, response.status), _app.base_url + '/' + directory + ' is safe');
		});
	}).run(function() {
		test.done();
	});
});

casper.test.begin('The admin url is not /admin', 1, function suite(test) {
	var default_admin_url = _app.base_url + '/admin';

	casper.start(default_admin_url, function () {
		test.assertHttpStatus(404, 'The administration area is not located at ' + default_admin_url);
	}).run(function() {
		test.done();
	});
});
