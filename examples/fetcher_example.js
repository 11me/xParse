const { XMLFetcher, RSSParser } = require('../lib');

const fetcher = new XMLFetcher();
const rssParser = new RSSParser();
const url = 'https://ir.tripadvisor.com/rss/news-releases.xml?items=15';


(async () => {
  const xml = await fetcher.fetch(url);

  const json = await rssParser.parse(xml);
  console.log(json)
})()
