import React, { useState } from "react";

import "./navbar.css";
import logo from "../../assets/logo.svg";
const navbarLinks = [
  { name: "Home", id: "#home" },
  { name: "What is gpt?", id: "#wgpt3" },
  { name: "Open AI", id: "#oai" },
  { name: "Case Studies", id: "#casestudies" },
  { name: "Library", id: "#library" },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar_container">
      <div className="gpt3_navbar">
        <div className="nav_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_links">
          {navbarLinks.map((item, index) => (
            <a href={item.id} key={item.id}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="nav_end_part">
          <div className="nav_btns">
            <button className="nav_in_btn">Sign In</button>
            <button className="nav_up_btn">Sign Up</button>
          </div>
          <div className="nav_toggle_menu">
            {toggleMenu ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                // stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setToggleMenu(false)}
                color="#fff"
                fontSize={27}
              >
                <path
                  fill="none"
                  // stroke="#000"
                  // stroke-width="2"
                  d="M7,7 L17,17 M7,17 L17,7"
                ></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                // stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setToggleMenu(true)}
                color="#fff"
                fontSize={27}
              >
                <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path>
              </svg>
            )}
            {toggleMenu && (
              <div className="nav_ontoggle">
                {navbarLinks.map((item, index) => (
                  <a href={item.id} key={item.id}>
                    {item.name}
                  </a>
                ))}
                <button className="nav_in_btn up_in_btn">Sign In</button>
                <button className="nav_up_btn up_in_btn">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
