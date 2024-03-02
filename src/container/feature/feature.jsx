import React from "react";
import "./feature.css";

export default function Feature({ text, title, feature_type }) {
  return (
    <div className={feature_type}>
      <div className="features_head">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="features_desc">{text}</div>
    </div>
  );
}
