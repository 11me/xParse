export class BaseParser {

  protected fetchProvider: Function;
  protected headers: Record<string,string>;

  constructor(fetchProvider?: Function) {

    if (fetchProvider) {

      this.fetchProvider = fetchProvider;

    } else {

      this.fetchProvider = fetch;

    }

    this.headers = {
      'User-Agent': 'xParse',
      'Accept': 'application/rss+xml,application/xhtml+xml,application/xml;q=0.9,application/html'
    }

  }

  protected async fetch(url: string): Promise<string> {

    try {
      const response = await this.fetchProvider(url, {
          headers: this.headers
        });

      if (!response.ok) throw new Error(`Could not fetch from ${url}`);

      const resource = await response.text();

      return resource;

    } catch (e) {
      throw new Error(`Network error: ${e}`)
    }
  }

}
