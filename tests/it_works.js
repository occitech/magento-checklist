var require = patchRequire(require);
//var casper = require('casper');

casper.test.begin('It works!', 1, function suite(test) {
	casper.start('http://casperjs.org/', function () {
		test.assertTitle('CasperJS, a navigation scripting and testing utility for PhantomJS and SlimerJS', 'it works!');
	}).run(function() {
		test.done();
	});
});
