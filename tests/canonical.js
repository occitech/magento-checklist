var _app = new app();
var page = _app.pages.home;
casper.test.begin('Canonical Link is set', 1, function suite(test) {
    casper.start(page.url(), function() {
        test.assertExists('link[rel=canonical]');
    }).run(function() {
        test.done();
    });

});
