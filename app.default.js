var require = patchRequire(require);
var utils = require('utils');
var magento = require('./src/magento');
var app = function() {
	app.super_.apply(this, arguments);

	this.base_url = '';
};

utils.inherits(app, magento);
