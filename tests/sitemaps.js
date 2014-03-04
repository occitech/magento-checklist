var _app = new app();

casper.test.begin("Sitemaps exist", _app.sitemaps.length, function suite(test) {
	var sitemapUrls = _app.sitemaps.map(function(url) {
		return _app.base_url + "/" + url
	});

	if (sitemapUrls.length === 0) {
		test.fail("No sitemap configured for this website");
	} else {
		casper.start().each(sitemapUrls, function (self, link) {
			self.thenOpen(link, function() {
				test.assertHttpStatus(200, "A sitemap exists at " + link);
			});
		});
	}

	casper.run(function() {
		test.done();
	});
});
