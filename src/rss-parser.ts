import {Parser} from "./types";
import { parseStringPromise } from 'xml2js';

export class RSSParser implements Parser{

  async parse(from: string): Promise<Record<string, string>[]> {

    try {

      const result = await parseStringPromise(from);

      return result.rss.channel;

    } catch (err) {
      //TODO: Handle error
      console.log(`Error while parsing ${err}`)
    }

  }

}
