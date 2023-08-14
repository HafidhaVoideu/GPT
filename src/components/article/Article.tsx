import React from "react";
import "./article.css";
type ArticleProps = {
  img: string;
  date: string;
  title: string;
};
const Article = ({ img, date, title }: ArticleProps) => {
  return (
    <article className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-img">
        <img src={img} alt="blog-image" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full</p>
      </div>
    </article>
  );
};

export default Article;
