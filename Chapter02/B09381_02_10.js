var parseHTML = require('parser').parseHTML;

var html = '<!DOCTYPE html><html><head><title>Mastering Javascript Design Patterns 3rd edition</title></head><body>The best book I ever read</body></html>';

console.log(parseHTML(html));
