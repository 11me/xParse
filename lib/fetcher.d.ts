import { Fetcher } from "./types";
export declare class XMLFetcher implements Fetcher {
    headers: Record<string, string>;
    constructor();
    fetch(source: string): Promise<string>;
}
