export interface Fetcher {
  fetch(source: string): Promise<string>
}

export interface Parser {
  parse(from: string, options?: Object): Promise<Record<string, string>[]>
}

export interface Extractor {
  extract(src: string, options?: Record<string,string>): Promise<string>
}
