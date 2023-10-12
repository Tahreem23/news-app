'use client'

import React, { useState } from 'react';
import Article from '../models/Article';
import { Button, Card, CardContent, Typography } from '@mui/material';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, dir }) => {

  const getFormattedPublishedDate = (publishedDate: string) => {
    const dateTimeString = publishedDate;
    const date = new Date(dateTimeString);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);


    return formattedDate;
  }

  return (
    <div className="max-w-md mx-auto rtl">
      <Card dir={dir}>
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
          <Typography variant="h6" component="div" className="article-title">
            {article.title}
          </Typography>
          <Typography variant="body2" component="div">
            {article.description}
          </Typography>
          <Typography variant="body2" component="div" className='published-date'>
            Published at: {getFormattedPublishedDate(article.publishedAt)}
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