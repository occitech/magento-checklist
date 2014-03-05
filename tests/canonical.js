var _app = new app();
var category = _app.pages.category;

casper.test.begin('Canonical Link is set on categories pages', _app.categories.length, function suite(test) {
	var categoriesUrls = _app.categories.map(function(slug) {
		return category.url(slug);
	});
	if (categoriesUrls.length == 0) {
		test.skip(1, 'No category found.');
	} else {
		casper.start().each(categoriesUrls, function(self, link) {
			self.thenOpen(link, function() {
				test.assertExists('link[rel=canonical]', "Canonical link is set");
			})
		})
		.run(function() {
			test.done();
		});
	}
});
