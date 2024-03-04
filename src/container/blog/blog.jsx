import React from "react";
import "./blog.css";
import Article from "../../components/article/article";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

export default function Blog() {
  return (
    <div className="blog_main_container">
      <div className="blog_heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="blog_articles">
        <div className="blog_main_article">
          <Article
            imgUrl={blog01}
            date="Sep 26,2011"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog_sec_article">
          <Article
            imgUrl={blog02}
            date="Sep 26,2011"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26,2011"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26,2011"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26,2011"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}
