'use client';

import React, { useState } from 'react';
import Article from '../models/Article';
import ArticleCard from '../components/ArticleCard';

const getArticles = async () => {
  return Article.findAll();
}


const ArticleListPage: React.FC = () => {

  const [articles, setArticles] = useState([]);

  React.useEffect(() => {
    getArticles().then((result) => {
      setArticles(result);
    });
  }, []);


  return (
    <div>
      <h1>List of Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleListPage;
