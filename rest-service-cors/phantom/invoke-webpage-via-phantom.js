console.log('Hello, world!');
var page = require('webpage').create();
page.open('http://localhost:9100', function(status) {
	if (status !== 'success') {
		console.log('FAIL to load the address');
	} else {
		var title = page.evaluate(function() {
			return document.title;
		});
		console.log('Page title is ' + title);
		page.render('/tmp/example.png');
	}
	phantom.exit();
});
console.log('goodbye!!');
