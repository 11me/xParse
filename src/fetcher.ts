import { Fetcher } from "./types";
import fetch from 'node-fetch-commonjs';

export class XMLFetcher implements Fetcher {

  async fetch(source: string): Promise<string> {

    const resp = await fetch(source)

    return await resp.text()

  }

}
