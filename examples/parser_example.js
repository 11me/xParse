const { RSSParser } = require('../lib/parsers/rss-parser');
const { HTMLExtractor } = require('../lib/extractors/html-extractor');

const url = 'https://ir.tripadvisor.com/rss/news-releases.xml?items=15';
const vcsrc = 'https://vc.ru/services/333747-apple-vypustila-ios-15-2-s-funkciey-cifrovoe-nasledstvo-i-proshivku-dlya-apple-tv-i-homepod-s-russkoyazychnoy-siri';

const rssParser = new RSSParser();
const extractor = new HTMLExtractor();

(async () => {

  const json = await rssParser.parse(url);
  console.log(json);

  const extractedFromHtml = await extractor.extract(vcsrc,
    {
      'title': 'title',
      'content': 'div.content:nth-child(1) > div:nth-child(3) > p:nth-child(1)',
      'views': '.views__value',
      'published': 'div.content-header-number > span:nth-child(1) > time:nth-child(1)'
    });
  console.log(extractedFromHtml);

})();
