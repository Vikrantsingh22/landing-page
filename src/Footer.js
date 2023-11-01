import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="">
      <footer className="footer4">
        <div className="container">
          <a href="./" className="brand">
            Brand
          </a>
          <ul className="menu">
            <li className="Footerli">
              <a href="./">Home</a>
            </li>
            <li className="Footerli">
              <a href="./">About</a>
            </li>
            <li className="Footerli">
              <a href="./">Contact</a>
            </li>
            <li className="Footerli">
              <a href="./">Blog</a>
            </li>
            <li className="Footerli">
              <a href="./">Services</a>
            </li>
            <li className="Footerli">
              <a href="./">Pricing</a>
            </li>
          </ul>
          <ul className="media-icons">
            <li className="Footerli">
              <a href="./">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="Footerli">
              <a href="./">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="Footerli">
              <a href="./">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="Footerli">
              <a href="./">
                <i className="fab fa-tumblr"></i>
              </a>
            </li>
            <li className="Footerli">
              <a href="./">
                <i className="fab fa-linkedin"></i>
                {/* <img src="background.jpg" alt=""> */}
              </a>
            </li>
          </ul>
          <p className="Footerp">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            quibusdam officia doloremque cumque veritatis perspiciatis aliquam
            porro necessitatibus earum dolorum cupiditate vero similique? A
            incidunt quod voluptatibus fuga. Porro, possimus!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
