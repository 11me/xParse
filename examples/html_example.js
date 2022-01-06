const fetch = require('node-fetch-commonjs');
const { HTMLParser } = require('../lib/parsers/html-parser');

const { sources } = require('../lib/sources');

const fetchProvider = async url => {
  const res = await fetch(url)
  const html = await res.text()
  return html
}

const htmlParser = new HTMLParser(fetchProvider);

htmlParser.parse(sources.thehackernews)
  .then(news => console.log(news))
