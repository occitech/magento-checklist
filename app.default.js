var require = patchRequire(require);
var utils = require('utils');
var magento = require('./src/magento');
var app = function() {
	app.super_.apply(this, arguments);

	// Customize the default Magento application settings here
	// this.base_url = 'http://www.your-application.example.com';
};

utils.inherits(app, magento);
