import React from "react";
import "./article.css";

export default function Article({ imgUrl, date, text }) {
  return (
    <>
      <div className="article_main_container">
        <div className="article_img">
          <img src={imgUrl} alt="blog" />
        </div>
        <div className="article_text">
          <div className="article_header">
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <p>
            Read Full Article
            <span className="arrow">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
