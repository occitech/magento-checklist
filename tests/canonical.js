var _app = new app();
var category = _app.pages.category;

casper.test.begin('Canonical Link is set on categories pages', _app.categories.length, function suite(test) {
	var categoriesUrls = _app.categories.map(function(slug) {
		return category.url(slug);
	});
    casper.start().each(categoriesUrls, function(self, link) {
		self.thenOpen(link, function() {
			utils.dump(link);
			test.assertExists('link[rel=canonical]', "Canonical link is set");
		})
	})
	.run(function() {
		test.done();
    });
});
