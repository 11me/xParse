import { parseStringPromise } from 'xml2js';
import { Feed, Options } from '../models';
import { BaseParser } from './base-parser';

export class RSSParser extends BaseParser {

  constructor(fetchProvider?: Function) {
    super(fetchProvider)
  }

  public async parse(options: Options): Promise<Feed[]> {

    const from = options['description']['url'];

    const resource = await this.fetch(from)

    const result = await parseStringPromise(resource);

    return result.rss.channel;

  }

}
