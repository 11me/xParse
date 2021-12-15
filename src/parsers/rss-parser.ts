import { Parser } from '../types';
import { parseStringPromise } from 'xml2js';
import { XMLFetcher } from '../fetcher';

export class RSSParser implements Parser {

  fetcher: XMLFetcher;

  constructor() {
    this.fetcher = new XMLFetcher()
  }

  public async parse(options: Object): Promise<Record<string, string>[]> {

    const from = options['description']['url'];

    const fetchedText = await this.fetcher.fetch(from)

    const result = await parseStringPromise(fetchedText);

    return result.rss.channel;

  }

}
