'use client';

import React, { useState, useEffect } from 'react';
import Article from '../models/Article';
import ArticleCard from '../components/ArticleCard';
import ArticleFilter from '../components/ArticleFilter';

const getArticles = async (q, l) => {
  return Article.findAll(q, l);
}

const ArticleListPage: React.FC = () => {

  const [articles, setArticles] = useState([]);
  const [lang, setLang] = useState('en');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getArticles(searchText, lang).then((result) => {
      setArticles(result);
    });
  }, []);

  const handleSearch = (searchText: string) => {
    console.log('searching', searchText);

   // if(searchText.length > 2){
      getArticles(searchText, lang).then((result) => {
        setArticles(result);
      });
    //}
  }

  // const filteredArticles = articles.filter((article : Article) => {
  //   return article.title.includes(searchText);
  // });


  return (
    <div>
      <ArticleFilter onSearch={handleSearch} />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleListPage;
