const fetch = require('node-fetch-commonjs');
const { RSSParser } = require('../lib/parsers/rss-parser');

const rssParser = new RSSParser(fetch);

const rssOpts = {
  'description': {
    'url': 'https://ir.tripadvisor.com/rss/news-releases.xml?items=15'
  }
};

(async () => {

  const json = await rssParser.parse(rssOpts);
  console.log(json);

})();
