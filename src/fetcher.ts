import { Fetcher } from "./types";
import fetch from 'node-fetch-commonjs';

export class XMLFetcher implements Fetcher {

  private headers: Record<string, string>
  private fetchProvider: Function

  constructor(fetchProvider?: Function) {
    this.headers = {
      'User-Agent': 'xParse',
      'Accept': 'application/rss+xml,application/xhtml+xml,application/xml;q=0.9'
    }
    if (fetchProvider) {
      this.fetchProvider = fetchProvider;
    } else {
      this.fetchProvider = fetch;
    }
  }

  async fetch(source: string): Promise<string> {

    const resp = await this.fetchProvider(source, {
      headers: this.headers
    })

    return await resp.text()

  }

}

export class HTMLFetcher implements Fetcher {

  private headers: Record<string, string>
  private fetchProvider: Function

  constructor(fetchProvider?: Function) {
    this.headers = {
      'User-Agent': 'xParse',
      'Accept': 'text/html'
    }
    if (fetchProvider) {
      this.fetchProvider = fetchProvider;
    } else {
      this.fetchProvider = fetch;
    }
  }

  async fetch(source: string): Promise<string> {

      const response = await fetch(source, {
        headers: this.headers
      });

      if (!response.ok) throw new Error(`Could not fetch html from ${source}`)

      const page = await response.text();

      return page
  }
}
