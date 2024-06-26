import React, { useEffect, useState } from 'react';
import "./news.css";
import CardFilter from './CardFilter';
import NewPostItem from './NewPostItem';

function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("https://fish-laser-gardenia.glitch.me/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-4">
        <h5 className="card-title">
          News &amp; Updates<span> | {filter}</span>
        </h5>

        <div className="news">
          {news &&
            news.length > 0 &&
            news.map((item) => (
              <NewPostItem key={item._id} item={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default News;