'use client';

import React, { useState, useEffect } from 'react';
import Article from '../models/Article';
import ArticleCard from '../components/ArticleCard';
import ArticleFilter from '../components/ArticleFilter';
import LanguageToggle from '../components/LanguageToggle';

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
  }, [searchText, lang]);

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  }

  const handleLanguageChange = (language: string) => {
    setLang(language);
  }

  return (
    <>
      <LanguageToggle onLanguageToggle={handleLanguageChange} />
      <ArticleFilter onSearch={handleSearch} />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} dir={lang == "ar" ? "rtl" : "ltr"} />
        ))}
      </div>
    </>
  );
};

export default ArticleListPage;
