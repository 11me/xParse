import * as cheerio from 'cheerio';
import { HTMLExtractor } from '../extractors/html-extractor';
import { Parser } from '../types';

export class HTMLParser implements Parser {

  public async parse(
    from: string,
    options: Object
  ): Promise<Record<string, string>[]> {

    const htmlExtractor = new HTMLExtractor();
    const html = await htmlExtractor.extract(from);

    const $ = cheerio.load(html);
    const items = [];

    // get all news link on the page
    $(options['item_links']['selector']).map((_, item) => {

      items.push($(item).attr('href'));

    });

    const resultArr = Promise.all(

      // visit each page
      items.map(async item => {

        const result = {};

        // extract html from the page
        const html = await htmlExtractor.extract(item);
        const $ = cheerio.load(html);

        // get requested content via selector
        Object.keys(options).map(key => {

          const selector = options[key]['selector'];

          if (key !== 'item_links') {

            result[key] = $(selector).text().trim();
          }

        });
          return result
      })
    );

    return resultArr;
  }
}
