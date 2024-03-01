import React from "react";
import "./whatgpt3.css";
import Feature from "../feature/feature";

export default function WhatGpt3() {
  return (
    <div className="what_gpt_container">
      <div className="sec_container">
        <div className="top_feature">
          <Feature
            style="top_feature"
            title="What is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>
        <div className="mid_feature">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="last_feature">
          <Feature
            style="bottom_feature"
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />
          <Feature
            style="bottom_feature"
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            style="bottom_feature"
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
}
