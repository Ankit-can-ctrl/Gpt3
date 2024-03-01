import React from "react";
import "./brand.css";
import { slack, atlassian, google, shopify, dropbox } from "./import";

export default function Brand() {
  return (
    <div className="brand_container">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}
