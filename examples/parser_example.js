const { RSSParser } = require('../lib/parsers/rss-parser');
const { HTMLParser } = require('../lib/parsers/html-parser');

const url = 'https://ir.tripadvisor.com/rss/news-releases.xml?items=15';
const vc = 'https://vc.ru';

const rssParser = new RSSParser();
const htmlParser = new HTMLParser();

const options = {

  'item_links': {
    'selector': '.content-link'
  },
  'title': {
    'selector': 'title',
  },
  'author': {
    'selector': '.l-entry__header > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)'
  },
  'content': {
    'selector': '.l-island-a > p'
  }
};

(async () => {

  const json = await rssParser.parse(url);
  console.log(json);

  const html = await htmlParser.parse(vc, options)

  console.log(html);

})();
