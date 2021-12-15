import * as cheerio from 'cheerio';
import { HTMLExtractor } from '../extractors/html-extractor';
import { Parser } from '../types';

export class HTMLParser implements Parser {

  public async parse(options: Object): Promise<Record<string, string>[]> {

    const from = options['description']['url'];

    const htmlExtractor = new HTMLExtractor();
    const html = await htmlExtractor.extract(from);

    const $ = cheerio.load(html);
    const pages = [];

    // get all news link on the page
    $(options['description']['page_selector'])
      .each((_, page) => {
        pages.push($(page).attr('href'));
    });

    const resultArr = Promise.all(

      // visit each page
      pages.map(async page => {

        const result = {};

        // extract html from the page
        const html = await htmlExtractor.extract(page);
        const $ = cheerio.load(html);

        // get requested content via selector
        Reflect.ownKeys(options['options']).map(key => {

          const selectors = options['options'][key]['selectors'];

            selectors.map(selector => {

              result[key] ? (result[key] = result[key] + $(selector).text().trim())
                : (result[key] = $(selector).text().trim())

            });

        });
          return result
      }));

    return resultArr;
  }
}
