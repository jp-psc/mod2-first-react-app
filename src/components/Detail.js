import React, { useState, useEffect } from "react";
import axios from "axios";

function Detail(props) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56ba5bcb4b1046a1aa9c599a01bd2ccf`
      );
      setArticle(response.data);
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>URL: {article.url}</p>
      <p>Image: {article.urlToImage}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default Detail;
