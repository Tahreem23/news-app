import Article from '../models/Article';

export async function getArticles(query, language, from, sortBy) {

    // this code is added to prevent unnecessary API calls 
    // console.log(`${process.env.API_URL}?q=${query}&language=${language}&from=${from}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`);
    // return [];
    
    const response = await fetch(`${process.env.API_URL}?q=${query}&language=${language}&from=${from}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`);
    
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