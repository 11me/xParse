import { Extractor } from '../../types';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch-commonjs';

export class HTMLExtractor implements Extractor {

  public async extract(src: string, options: Object): Promise<Record<string, string>> {

    try {

      const response = await fetch(src, {
        headers: {
          'User-Agent': 'xParse',
          'Accept': 'text/html'
        }
      });

      if (!response.ok) return {'error': 'Bad request'};

      const page = await response.text();
      const $ = cheerio.load(page);

      const result = responseBuilder(options, $);

      return result

    } catch (err) {
      //TODO: handle error
      console.log(err);
    }

  }
}

const responseBuilder = (o: Object, $: cheerio.CheerioAPI): Record<string, string> => {

  const result = {};

  Object.keys(o).map(key => {
    result[key] = $(o[key]).text()
  })

  return result
}
