casper.test.begin('Page content tests', 4, function suite(test) {
    casper.start('http://localhost:9100', function() {
        test.assertExists('p.greeting-id');
        test.assertMatch(this.fetchText('p.greeting-id'), /^The ID is \d+$/i, 'cors service returns a numerical id');
        test.assertExists('p.greeting-content');
        test.assertMatch(this.fetchText('p.greeting-content'), /^The Content is Hello, World!/i, 'cors service returns a numerical id');
    }).run(function() {
        test.done();
    });
});casper.test.begin('Testing GreetingService with name parameter', 4, function suite(test) {
    casper.start('http://localhost:9100/?name=Ralf', function() {
        test.assertExists('p.greeting-id');
        test.assertMatch(this.fetchText('p.greeting-id'), /^The ID is \d+$/i, 'cors service returns a numerical id');
        test.assertExists('p.greeting-content');
        test.assertMatch(this.fetchText('p.greeting-content'), /^The Content is Hello, Ralf!/i, 'cors service returns a numerical id');
    }).run(function() {
        test.done();
    });
});