export const vcru = {

  'description': {
    'url': 'https://vc.ru',
    'page_selector': '.content-link',
    'creator': 'vc.ru'
  },
  'options': {
    'title': {
      'selectors': ['title'],
    },
    'author': {
      'selectors': ['.l-entry__header > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)']
    },
    'pubDate': {
      'selectors': ['div.content-header-number > span:nth-child(1) > time:nth-child(1)']
    },
    'description': {
      'selectors': ['.l-island-a > p']
    }
  }
};
