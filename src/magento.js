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
};

module.exports = magento;
