import { Parser } from '../types';
import { parseStringPromise } from 'xml2js';
import { XMLFetcher } from '../fetcher';
import { Feed, Options } from '../models';

export class RSSParser implements Parser {

  fetcher: XMLFetcher;

  constructor() {
    this.fetcher = new XMLFetcher()
  }

  public async parse(options: Options): Promise<Feed[]> {

    const from = options['description']['url'];

    const fetchedText = await this.fetcher.fetch(from)

    const result = await parseStringPromise(fetchedText);

    return result.rss.channel;

  }

}
