import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError("Error fetching news: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  if (articles.length === 0) {
    return <div className='no-articles'>No articles found.</div>;
  }

  return (
    <div className={`news-container ${articles.length < 4 ? 'center-items' : ''}`}>
      {articles.slice(0, 8).map((news) => (
        <NewsItem
          key={news.url}
          title={news.title}
          description={news.description}
          src={news.urlToImage || 'default-image-url.jpg'} // Optional default image
          url={news.url}
        />
      ))}
    </div>
  );
};

export default News;
