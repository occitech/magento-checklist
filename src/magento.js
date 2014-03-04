var home = require('./pages/home');

var magento = function () {
	this.pages =  {
		home : new home(this)
	};
};
module.exports = magento;