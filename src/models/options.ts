export interface Options {
  description: {
    url: string
    page_selector: string
    creator: string
  }
  options: {
    title: {
      selectors: Array<string> | string
    }
    author: {
      selectors: Array<string> | string
    }
    pubDate: {
      selectors: Array<string> | string
    }
    description: {
      selectors: Array<string> | string
    }
  }
}
