const { HTMLParser } = require('../lib/parsers/html-parser');
//const { vcru } = require('../lib/options/vc-ru');
const { thehackernews } = require('../lib/options/thehackernews-com');

const htmlParser = new HTMLParser();

htmlParser.parse(thehackernews)
  .then(news => console.log(news))
