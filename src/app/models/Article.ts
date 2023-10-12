import { getArticles } from '../api/articles';

class Article {
    public title: string;
    public description: string;
    public url: string;
    public urlToImage: string;
    public publishedAt: string;
    public author: string;
    public content: string;

    public source_id: string;
    public source_name: string;
  
    constructor(title: string, description: string, url: string, urlToImage: string, publishedAt: string, 
      author : string, content : string, source_id : string, source_name : string) {

      this.title = title;
      this.description = description;
      this.url = url;
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
      this.author = author;
      this.content = content;
      this.source_id = source_id;
      this.source_name = source_name;
    }
    
    static async findAll() {
      const articles = await getArticles("apple", "en", "2023-10-05", "publishedAt");
  
      return articles;
    }
  }
  
  export default Article;
  