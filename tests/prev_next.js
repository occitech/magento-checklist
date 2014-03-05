var _app = new app();
var category = _app.pages.category;

casper.test.begin('Paginated pages have rel prev and next set', 2, function suite(test) {
	var paginatedCategoryUrl = category.url(_app.categories[0]);

	if (paginatedCategoryUrl.length == 0) {
		test.skip(2, 'No category found.');
	} else {
		casper.start(paginatedCategoryUrl + '?p=2', function() {
			test.assertExists('link[rel=prev]', "Link rel=prev is set");
			test.assertExists('link[rel=next]', "Link rel=next is set");
		})
		.run(function() {
			test.done();
		});
	};
});
