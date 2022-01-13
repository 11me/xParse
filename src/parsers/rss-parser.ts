import { parseStringPromise } from 'xml2js';
import { Feed } from '../models';
import { BaseParser } from './base-parser';
import { hashCode } from '../helpers';

export class RSSParser extends BaseParser {

  constructor(fetchProvider?: Function) {
    super(fetchProvider);
  }

  public async parse(url: string): Promise<Feed[]> {

    const resource = await this.fetch(url);

    const result = await parseStringPromise(resource);

    const creator = result.rss.channel[0]['title'][0];
    const items = result.rss.channel[0]['item'];
    const itemKeys = Reflect.ownKeys(items[0]);

    // flatten the result
    items.forEach((item: Object, i: number, arr: Array<any>) => {

      itemKeys.forEach(key => {
        item[key] = item[key][0];
        item['creator'] = creator;
        if (key === 'guid') {
          try {
            item[key] = hashCode(item['link']);
          } catch(e) {
            // use existing guid
          }
        }
      });

      arr[i] = item;
    });

    return items;
  }
}
