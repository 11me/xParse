const { RSSParser } = require('../lib/parsers/rss-parser');
const { HTMLParser } = require('../lib/parsers/html-parser');

const rssParser = new RSSParser();
const htmlParser = new HTMLParser();

const rssOpts = {
  'options': {
    'url': 'https://ir.tripadvisor.com/rss/news-releases.xml?items=15'
  }
}

const vcOpts = {

  'options': {
    'url': 'https://vc.ru',
    'description': 'News portal'
  },

  'pages': {
    'selectors': '.content-link'
  },
  'title': {
    'selectors': 'title',
  },
  'author': {
    'selectors': '.l-entry__header > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)'
  },
  'content': {
    'selectors': '.l-island-a > p'
  }
};

(async () => {

  const json = await rssParser.parse(rssOpts);
  console.log(json);

  const html = await htmlParser.parse(vcOpts)

  console.log(html);

})();
