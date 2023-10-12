import Article from '../models/Article';

const API_URL = "https://newsapi.org/v2/everything";

export async function getArticles(query, language, from, sortBy) {

    const response = await fetch(`${API_URL}?q=${query}&language=${language}&from=${from}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`);

    const articlesData = await response.json();
    
    if(articlesData.status == "error"){
        return [];
    }

    // Convert the articles data to Article objects.
    const articles = articlesData.articles.map((articleData) => {

        const article = new Article(
            articleData.title,
            articleData.description,
            articleData.url,
            articleData.urlToImage,
            articleData.publishedAt,
            articleData.author,
            articleData.content,
            articleData.source.id,
            articleData.source.name,
        );

        return article;
    });

    return articles;
}