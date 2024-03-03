import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="possibility_main_container" id="casestudies">
      <div className="poss_img">
        <img src={possibilityImage} alt="possibility_Image" />
      </div>
      <div className="poss_description">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
