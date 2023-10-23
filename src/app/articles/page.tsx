'use client';

import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Article from '../models/Article';
import ArticleCard from '../components/ArticleCard';
import LanguageToggle from '../components/LanguageToggle';
import ChipSelection from '../components/ChipSelection';

const getArticles = async (q: string, l: string) => {
  return Article.findAll(q, l);
}

const ArticleListPage: React.FC = () => {

  const [articles, setArticles] = useState([]);
  const [lang, setLang] = useState('en');
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    handleArticles();    
  }, [searchText, lang]);

  const handleArticles = () => {
    getArticles(searchText, lang).then((result) => {
      setArticles(result);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    });
  }

  const handleLanguageChange = (language: string) => {
    setArticles([]);
    setLoading(true);
    setLang(language);
  }

  const handleSelectedChip = (chip: string) => {
    setArticles([]);
    setLoading(true);
    setSearchText(chip);
  }

  return (
    <>
      <LanguageToggle onLanguageToggle={handleLanguageChange} />
      <ChipSelection onChipSelection={handleSelectedChip} />

      {isLoading && <div className='flex justify-center align-items-center mt-10'>
          <CircularProgress />
      </div>}
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article}  />
          // dir={lang == "ar" ? "rtl" : "ltr"} />
        ))}
      </div>

        {articles.length == 0 && 
          <div className="w-full text-center">
            Nothing to see here...
          </div>
        }
    </>
  );
};

export default ArticleListPage;
