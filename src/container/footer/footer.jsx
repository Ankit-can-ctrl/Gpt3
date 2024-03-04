import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer_main_container">
      <div className="footer_header">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="footer_btn">
        <button>Request Early Access</button>
      </div>
      <div className="footer_links">
        <div className="footer_links_heading">
          <img src={logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="right_links_container">
          <div className="footer_sub_links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#Overans">Overans</a>
              </li>
              <li>
                <a href="#Social">Social Media</a>
              </li>
              <li>
                <a href="#Counter">Counters</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_company">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#t&c">Terms & Conditions</a>
              </li>
              <li>
                <a href="#pp">Privacy Policy</a>
              </li>
              <li>
                <a href="#C">contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_get_in_touch">
            <h3>Get in touch</h3>
            <ul>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>@2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}
