import Article from '../models/Article';

export async function getArticles(query, language, from, sortBy) {

    const isLocalApi = false;

    // this code is added to prevent unnecessary API calls 
    // console.log(getLocalApiURL(isLocalApi, query, language, from, sortBy));
    // return [];
    
    const response = await fetch(getLocalApiURL(isLocalApi, query, language, from, sortBy));
    
    const articlesData = await response.json();
    
    if(articlesData.status == "error"){
        return [];
    }
    
    const result = isLocalApi ? articlesData : articlesData.articles;

    // Convert the articles data to Article objects.
    const articles = result.map((articleData) => {

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

function getLocalApiURL(isLocalApi, query, language, from, sortBy){
    if(isLocalApi)
        return `${process.env.LOCAL_API_URL}?query=${query}&language=${language}`;
    
    return `${process.env.API_URL}?q=${query}&language=${language}&from=${from}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`;
}