const fetch = require('node-fetch-commonjs');
const { HTMLParser } = require('../lib/parsers/html-parser');

const { options } = require('../lib/options');

const htmlParser = new HTMLParser(fetch);

htmlParser.parse(options.thehackernews)
  .then(news => console.log(news))
