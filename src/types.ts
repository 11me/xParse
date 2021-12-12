export interface Fetcher {
  fetch(source: string): Promise<string>
}

export interface Parser {
  parse(from: string): Promise<Record<string, string>[]>
}
