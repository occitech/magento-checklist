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
