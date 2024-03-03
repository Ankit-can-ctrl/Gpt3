import React from "react";
import "./App.css";
import { Brand, Cta, Navbar } from "./components";
import {
  Header,
  Possibility,
  Blog,
  WhatGpt3,
  Footer,
  Description,
} from "./container";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGpt3 />
        <Description />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
