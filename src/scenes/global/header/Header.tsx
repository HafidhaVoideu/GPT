import React from "react";

import "./header.css";
import people from "../../../assets/people.png";
import ai from "../../../assets/ai.png";

const Header = () => {
  return (
    <section id="home" className="gpt3__header  section__padding ">
      <section className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <form className="gpt3__header-form">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
          />

          <button type="submit">get started</button>
        </form>

        <div className="gpt3__header-people">
          <img src={people} alt="people" />
          <p> 1,600 people requested access a visit in last 24 hours</p>
        </div>
      </section>
      <div className="gpt3__header-img">
        <img src={ai} alt="Robot-picture" />
      </div>
    </section>
  );
};

export default Header;
