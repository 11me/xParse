export class BaseParser {

  protected fetchProvider: Function;
  protected headers: Record<string,string>;

  constructor(fetchProvider?: Function) {

    if (fetchProvider) {

      this.fetchProvider = fetchProvider;

    } else {

      throw new Error('Fetch provider is not given')

    }

  }

  protected async fetch(url: string): Promise<any> {

    try {

      const resource = await this.fetchProvider(url)

      return resource

    } catch (e) {
      throw new Error(`Error occured while invoking fetchProvider`)
    }
  }

}
