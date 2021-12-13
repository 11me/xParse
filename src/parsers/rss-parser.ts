import { Parser } from '../types';
import { parseStringPromise } from 'xml2js';
import { XMLFetcher } from '../fetcher';

export class RSSParser implements Parser {

  fetcher: XMLFetcher;

  constructor() {
    this.fetcher = new XMLFetcher()
  }

  public async parse(from: string): Promise<Record<string, string>[]> {

    try {

      const fetchedText = await this.fetcher.fetch(from)

      const result = await parseStringPromise(fetchedText);

      return result.rss.channel;

    } catch (err) {
      //TODO: Handle error
      console.log(`Error while parsing ${err}`);
    }

  }

}
