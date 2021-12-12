import { Fetcher } from "./types";
export declare class XMLFetcher implements Fetcher {
    fetch(source: string): Promise<string>;
}
