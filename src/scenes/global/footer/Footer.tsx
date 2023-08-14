import React from "react";
import "./footer.css";

import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="gpt3__footer  section__padding">
      <header className="gpt3__footer-header">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </header>

      <div className="gpt3__footer-btn">
        <p> Request Early access</p>
      </div>

      <section className="gpt3__footer-links">
        <div className="gpt3__footer-logo">
          <img src={logo} alt="gpt3-logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <ul className="gpt3__footer-list">
          <li>Links</li>
          <li>Overons</li>
          <li>Social Media</li>
          <li>Counters</li>
          <li>Contact</li>
        </ul>

        <ul className="gpt3__footer-list">
          <li>Company</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>

        <ul className="gpt3__footer-list">
          <li>Get in touch</li>
          <li>085-132567</li>
          <li>info@payme.ne</li>
          <li>Crechterwoord K12 182 DK Alknjkcb</li>
        </ul>
      </section>
      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
