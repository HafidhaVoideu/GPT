import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <section id="wgpt3" className="gpt3__whatgpt3 section__margin ">
      <section className="gpt3__whatgpt3__feature ">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </section>
      <div className="gpt3__whatgpt3__header">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination{" "}
        </h1>
        <p>Explore the Library</p>
      </div>

      <section className="gpt3__whatgpt3__container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </section>
    </section>
  );
};
export default WhatGPT3;
