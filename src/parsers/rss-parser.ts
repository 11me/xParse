import { parseStringPromise } from 'xml2js';
import { Feed } from '../models';
import { BaseParser } from './base-parser';

export class RSSParser extends BaseParser {

  constructor(fetchProvider?: Function) {
    super(fetchProvider);
  }

  public async parse(url: string): Promise<Feed[]> {

    const resource = await this.fetch(url);

    const result = await parseStringPromise(resource);

    return result.rss.channel;

  }

}
