import * as cheerio from 'cheerio';
import { HTMLExtractor } from '../extractors/html-extractor';
import { Parser } from '../types';

export class HTMLParser implements Parser {

  public async parse(options: Object): Promise<Record<string, string>[]> {

    const from = options['options']['url'];

    const htmlExtractor = new HTMLExtractor();
    const html = await htmlExtractor.extract(from);

    const $ = cheerio.load(html);
    const items = [];

    // get all news link on the page
    $(options['pages']['selectors']).map((_, item) => {

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

          const selectors = options[key]['selectors'];
          if (Array.isArray(selectors)) {

            selectors.map(selector => {

              if ((key !== 'pages') && (key !== 'options')) {

                result[key] ? (result[key] = result[key] + $(selector).text().trim())
                  : (result[key] = $(selector).text().trim())
              }

            });

          } else {

            if ((key !== 'pages') && (key !== 'options')) {

              result[key] = $(selectors).text().trim();
            }

          }

        });
          return result
      }));

    return resultArr;
  }
}
