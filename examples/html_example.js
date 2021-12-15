const { HTMLParser } = require('../lib/parsers/html-parser');
const vc = require('../lib/options/vc-ru');

const htmlParser = new HTMLParser();

(async () => {

  const html = await htmlParser.parse(vc)

  console.log(html);

})();
