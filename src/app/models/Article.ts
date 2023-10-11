class Article {
    public title: string;
    public description: string;
    public url: string;
    public urlToImage: string;
    public publishedAt: string;
  
    constructor(title: string, description: string, url: string, urlToImage: string, publishedAt: string) {
      this.title = title;
      this.description = description;
      this.url = url;
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
    }
  }
  
  export default Article;
  