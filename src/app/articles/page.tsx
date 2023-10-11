import React from 'react';
import Article from '../models/Article';
import ArticleCard from '../components/ArticleCard';

// Sample array of articles (replace with your actual data)
const articles: Article[] = [
  new Article(
    'Sample Article 1',
    'This is a sample article description 1.',
    'https://example.com/article/1',
    'https://example.com/images/sample1.jpg',
    '2023-10-12T14:00:00Z'
  ),
  new Article(
    'Sample Article 2',
    'This is a sample article description 2.',
    'https://example.com/article/2',
    'https://example.com/images/sample2.jpg',
    '2023-10-13T14:00:00Z'
  ),
  // Add more articles as needed
];

const ArticleListPage: React.FC = () => {
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
