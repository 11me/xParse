const { HTMLParser } = require('../lib/parsers/html-parser');
const vc = require('../lib/options/vc-ru');
const hn = require('../lib/options/hackernews-com');

const htmlParser = new HTMLParser();

(async () => {

  //const html = await htmlParser.parse(vc)
  // hackernews parser
  const html = await htmlParser.parse(hn)

  console.log(html);

})();
