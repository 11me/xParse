const fetch = require('node-fetch-commonjs');
const { HTMLParser } = require('../lib/parsers/html-parser');

const { sources } = require('../lib/sources');

const htmlParser = new HTMLParser(fetch);

htmlParser.parse(sources.thehackernews)
  .then(news => console.log(news))
