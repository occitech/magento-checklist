var home = require('./pages/home');

var magento = function () {
	this.base_url = 'http://demo.magentocommerce.com';

	this.unsecure_directories = ['downloader', 'var', 'media'];

	this.pages = {
		home : new home(this)
	};
};

module.exports = magento;
