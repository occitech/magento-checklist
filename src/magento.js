var home = require('./pages/home');
var category = require('./pages/category');

var magento = function () {
	this.base_url = 'http://demo.magentocommerce.com';

	this.unsecure_directories = ['downloader', 'var', 'media'];

	this.categories = [];

	this.sitemaps = [];

	this.is_production = false;

	this.selectors = {
		demo_notice: '.demo-notice'
	};
	this.pages = {
		home : new home(this),
		category: new category(this)
	};
	this.irrelevantTests = [];
};

magento.prototype.isIrrelevant = function isIrrelevant(testName) {
	return (this.irrelevantTests.indexOf(testName) != -1);
};

magento.prototype.skipIrrelevantTest = function skipIrrelevantTest(test, nb, name) {
	if (this.isIrrelevant(name)) {
		test.skip(nb, 'Irrelevant test ' + name);
		test.done();
	}
};

module.exports = magento;
