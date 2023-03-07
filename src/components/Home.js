import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56ba5bcb4b1046a1aa9c599a01bd2ccf"
      );
      setArticles(response.data.articles);
    };
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
