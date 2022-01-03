export interface Options {
  description: {
    url: string
    page_selector: string
    type?: string
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
    content: {
      selectors: Array<string> | string
    }
  }
}
