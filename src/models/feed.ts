export interface Feed {
  title:        string
  link?:        string
  author?:      string // TODO: remove author and use creator instead
  creator:      string
  pubDate:      string
  content:      string // TODO: remove content and use description instead
  description?: string
}
