export const thehackernews = {

  'description': {
    'url': 'https://thehackernews.com',
    'page_selector': 'a.story-link',
    'creator': 'The HackerNews'
  },
  'options': {
    'title': {
      'selectors': ['h1.story-title'],
    },
    'author': {
      'selectors': ['span.author:nth-child(4) > a:nth-child(1)']
    },
    'pubDate': {
      'selectors': ['span.author:nth-child(2)']
    },
    'description': {
      'selectors': ['p']
    }
  }
};
