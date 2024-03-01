import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

export default function Header() {
  return (
    <div className="header_two_parts">
      <div className="header_container">
        <div className="top_text">
          <h1 className="gradient__text">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className="input_part">
          <input
            className="input_email"
            type="email"
            placeholder="Your Email Address"
          />
          <button type="button">Get Started</button>
        </div>
        <div className="people_part">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="ai_img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}
