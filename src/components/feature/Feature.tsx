import React from "react";
import "./feature.css";

type FeatureProps = {
  title: string;
  text: string;
};

const Feature = ({ title, text }: FeatureProps) => {
  return (
    <div className="gpt3__feature">
      <div className="gpt3__feature__title">
        <div />
        <h1> {title} </h1>
      </div>

      <div className="gpt3__feature__text">
        <p> {text}</p>
      </div>
    </div>
  );
};

export default Feature;
