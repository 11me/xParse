export interface Fetcher {
  fetch(source: string): Promise<string>
}
