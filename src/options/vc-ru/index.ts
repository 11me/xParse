module.exports = {

  'options': {
    'url': 'https://vc.ru',
    'description': 'News portal'
  },
  'pages': {
    'selectors': '.content-link'
  },
  'title': {
    'selectors': 'title',
  },
  'author': {
    'selectors': '.l-entry__header > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)'
  },
  'pubDate': {
    'selectors': 'div.content-header-number > span:nth-child(1) > time:nth-child(1)'
  },
  'content': {
    'selectors': '.l-island-a > p'
  }

};
