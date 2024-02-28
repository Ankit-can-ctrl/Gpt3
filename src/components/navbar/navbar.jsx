import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="navbar_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar_links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#wgpt3">What is GPT?</a>
          </li>
          <li>
            <a href="#possibility">Open AI</a>
          </li>
          <li>
            <a href="#features">Case Studies</a>
          </li>
          <li>
            <a href="#blog">Library</a>
          </li>
        </div>
        <div className="navbar_btns">
          <button className="navbar_signin_btn">Sign In</button>
          <button className="navbar_signup_btn">Sign Up</button>
        </div>
        <div className="navbar_toggle_menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
