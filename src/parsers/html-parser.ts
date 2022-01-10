import * as cheerio from 'cheerio';
import { Feed, Options } from '../models';
import { BaseParser } from './base-parser';
import { hashCode } from '../helpers';

export class HTMLParser extends BaseParser {

  constructor(fetchProvider?: Function) {
    super(fetchProvider)
  }

  public async parse(options: Options): Promise<Feed[]> {

    const from = options['description']['url'];
    const creator = options['description']['creator']

    const html = await this.fetch(from)

    const $ = cheerio.load(html);
    const pages = [];
    let feeds;

    // get all news link on the page
    $(options['description']['page_selector'])
      .each((_, page) => {
        pages.push($(page).attr('href'));
    });

    feeds = Promise.all(

      // visit each page
      pages.map(async pageURL => {

        const guid = hashCode(pageURL);

        const result = {
          link: pageURL,
          creator,
          guid
        };

        // extract html from the page
        const html = await this.fetch(pageURL);
        const $ = cheerio.load(html);

        // get requested content via selector
        Reflect.ownKeys(options['options']).map(key => {

          const selectors = options['options'][key]['selectors'];

            selectors.map(selector => {

              //result[key] ? (result[key] = result[key] + $(selector).text().trim())
               // : (result[key] = $(selector).text().trim())

              if (result[key]) {
                return result[key] = result[key] + $(selector).text().trim()
              }
              return result[key] = $(selector).text().trim()

            });

        });
          return result
      }));

    return feeds;
  }
}
