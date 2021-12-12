import { Fetcher } from "./types";
import fetch from 'node-fetch-commonjs';

export class XMLFetcher implements Fetcher {

  headers: Record<string, string>

  constructor() {
    this.headers = {
      'User-Agent': 'xParse',
      'Accept': 'application/rss+xml,application/xhtml+xml,application/xml;q=0.9'
    }
  }

  async fetch(source: string): Promise<string> {

    const resp = await fetch(source, {
      headers: this.headers
    })

    return await resp.text()

  }

}
