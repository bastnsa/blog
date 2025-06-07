export interface Frontmatter {
  title: string;
  topic: string;
  pubDate: string;
  description: string;
}

export interface Content {
  frontmatter: Frontmatter;
  url: string;
  compiledContent: () => string;
}
