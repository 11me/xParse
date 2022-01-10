const fetch = require('node-fetch-commonjs');
const { RSSParser } = require('../lib/parsers/rss-parser');

const fetchProvider = async url => {
  const res = await fetch(url);
  const html = await res.text();
  return html;
}

const rssParser = new RSSParser(fetchProvider);
const url = 'https://ir.tripadvisor.com/rss/news-releases.xml?items=15';

rssParser.parse(url)
  .then(rss => rss[0].item.forEach(item => console.log(item)));
