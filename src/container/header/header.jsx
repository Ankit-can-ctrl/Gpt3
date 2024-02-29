import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

export default function Header() {
  return (
    <div className="header_container">
      <div className="top_text">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Do not go where the path may lead, go instead where there is no path
          and leave a trail. -Ralph Waldo Emerson
        </p>
      </div>
      <div className="input_part">
        <input
          className="input"
          type="email"
          placeholder="Your Email Address"
        />
        <button type="button">Get Started</button>
      </div>
      <div className="people_part">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      <div className="ai_img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}
