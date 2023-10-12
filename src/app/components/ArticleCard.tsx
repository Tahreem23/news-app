'use client'

import React, { useState } from 'react';
import Article from '../models/Article';
import { Button, Card, CardContent, Typography } from '@mui/material';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {

  const [isArabic, setIsArabic] = useState(false); // Initially, English

  const toggleLanguage = () => {
    setIsArabic((prevIsArabic) => !prevIsArabic);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardContent>
            <img
                src={article.urlToImage}
                alt={article.title}
                style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                }}
          />
          <Typography variant="h6" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" component="div">
            {article.description}
          </Typography>
          <Typography variant="body2" component="div">
            Published at: {article.publishedAt}
          </Typography>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline inline-block mt-2"
          >
            Read More
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleCard;