const { XMLFetcher } = require('../lib');

const fetcher = new XMLFetcher();

fetcher.fetch('https://ir.tripadvisor.com/rss/news-releases.xml?items=15')
  .then(text => console.log(text))
