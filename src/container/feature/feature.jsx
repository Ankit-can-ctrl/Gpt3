import React from "react";
import "./feature.css";

export default function Feature({ text, title, style }) {
  return (
    <div className={style}>
      <div className="features_head">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="features_desc">{text}</div>
    </div>
  );
}
