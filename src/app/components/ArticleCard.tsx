'use client'

import React, { useState } from 'react';
import Article from '../models/Article';
import { Card, CardContent, Typography } from '@mui/material';

interface ArticleCardProps {
  article: Article;
  dir: string;
}

const placeholderImageUrl = 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg';

const ArticleCard: React.FC<ArticleCardProps> = ({ article, dir }) => {

  const getFormattedPublishedDate = (publishedDate: string) => {
    const dateTimeString = publishedDate;
    const date = new Date(dateTimeString);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    //const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);


    return formattedDate;
  }

  const [imageUrl, setImageUrl] = useState(article.urlToImage);
  const [imageAlt, setImageAlt] = useState(article.title);

  const handleImageError = () => {
    console.log("image error")
    setImageUrl(placeholderImageUrl);
    setImageAlt('');
  }

  return (
    <div className="max-w-md mx-auto">
      <Card dir={dir} className="flex flex-col">
        <div className="w-full">
          <img
            src={imageUrl}
            alt={imageAlt}
            onError={handleImageError}
            className="w-full h-auto object-cover"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              }}
          />
        </div>

        <div className="w-full p-4">
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
        </div>
      </Card>
    </div>
  );
};

export default ArticleCard;