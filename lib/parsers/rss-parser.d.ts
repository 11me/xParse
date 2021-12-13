import { Parser } from '../types';
import { XMLFetcher } from '../fetcher';
export declare class RSSParser implements Parser {
    fetcher: XMLFetcher;
    constructor();
    parse(from: string): Promise<Record<string, string>[]>;
}
