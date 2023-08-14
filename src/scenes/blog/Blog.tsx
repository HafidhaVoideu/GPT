import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog05, blog03, blog04 } from "./imports";

const Blog = () => {
  const articles = [
    {
      id: 1,
      img: blog01,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },

    {
      id: 2,
      img: blog02,
      date: "Aug 16, 2021",
      title: "GPT-3 and Open AI and the existential questions?",
    },

    {
      id: 3,

      img: blog03,
      date: "Jul 2, 2021",
      title: "GPT-3 and Open AI and Blockchain?",
    },

    {
      id: 4,
      img: blog04,
      date: "Dec 28, 2021",
      title: "GPT-3 and Open AI is going to revolutionize cryptocurrency?",
    },

    {
      id: 5,
      img: blog05,
      date: "Sep 05, 2021",
      title: "GPT-3 and Open AI threaten the future of humanity?",
    },
  ];
  return (
    <section className="gpt3__blog  section__padding" id="library">
      <header className="gpt3__blog-header">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </header>
      <section className="gpt3__blog-container">
        {articles.map(({ id, title, date, img }) => (
          <Article key={id} img={img} title={title} date={date} />
        ))}
      </section>
    </section>
  );
};

export default Blog;
