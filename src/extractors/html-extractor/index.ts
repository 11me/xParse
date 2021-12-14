import { Extractor } from '../../types';
import { HTMLFetcher } from '../../fetcher';

export class HTMLExtractor implements Extractor {

  public async extract(src: string): Promise<string> {

    const htmlFetcher = new HTMLFetcher();

    const html = await htmlFetcher.fetch(src);

    return html;
  }
}
