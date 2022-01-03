import { Feed } from "./models";

export interface Fetcher {
  fetch(source: string): Promise<string>
}

export interface Parser {
  parse(options: Object): Promise<Feed[]>
}

export interface Extractor {
  extract(src: string, options?: Record<string,string>): Promise<string>
}
