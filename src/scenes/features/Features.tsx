import React from "react";
import { Feature } from "../../components";

import "./features.css";

const Features = () => {
  const features = [
    {
      title: "Improving end distrusts instantly",
      text: `From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.`,
    },

    {
      title: "Become the tended active",
      text: `Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.`,
    },

    {
      title: "Message or am nothing",
      text: `Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.`,
    },

    {
      title: "Really boy law county",
      text: `Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.`,
    },
  ];

  return (
    <section className="gpt3__features  section__padding" id="caseS">
      <header className="gpt3__features__header">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </header>

      <section className="gpt3__features__container">
        {features.map(({ title, text }, index) => (
          <Feature key={index} title={title} text={text} />
        ))}
      </section>
    </section>
  );
};

export default Features;
