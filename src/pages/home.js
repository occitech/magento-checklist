var home = function(app) {
	var app = app;

	this.url = function() {
		return app.base_url + '/';
	};
};

module.exports = home;
