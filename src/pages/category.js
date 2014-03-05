var category = function(app) {
	var app = app;
	this.url = function(categorie_slug) {
		return app.base_url + '/' + categorie_slug;
	};
};

module.exports = category;
