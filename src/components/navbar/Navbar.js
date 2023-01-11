import React from "react";
import { useRef, useState } from "react";
import "./Navbar.css";
import codeutsava from "../../assets/images/codeutsava.png";
import tcp from "../../assets/images/tcp.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = useRef(null);
  function toggleMenu() {
    setIsOpen(!isOpen);
    hamburger.current.classList.toggle("active");
  }

  return (
    <div className="codeutsava__navbar-container">
      <header className="codeutsava__navbar">
        <div className="codeutsava__navbar-body">
          <div className="codeutsava__navbar-logo">
            <img src={codeutsava} />
          </div>
          <nav className="codeutsava__navbar-menu">
            <ul className="codeutsava__navbar-navlist">
              <li className="codeutsava__navbar-navitem">
                <a href="#home">
                  <h3 className="codeutsava__navbar-menu-heading">Home</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-navitem">
                <a href="#aboutus">
                  <h3 className="codeutsava__navbar-menu-heading">About Us</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-navitem">
                <a href="#events" >
                  <h3 className="codeutsava__navbar-menu-heading">Events</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-navitem">
                <a href="#speakers">
                  <h3 className="codeutsava__navbar-menu-heading">Speakers</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-navitem">
                <a href="#sponsers">
                  <h3 className="codeutsava__navbar-menu-heading">Sponsors</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-navitem">
                <a href="#faq">
                  <h3 className="codeutsava__navbar-menu-heading">FAQ</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-navitem">
                <a href="#contactus">
                  <h3 className="codeutsava__navbar-menu-heading">
                    Contact Us
                  </h3>
                </a>
              </li>
            </ul>
          </nav>
          <div className="codeutsava__navbar-logo">
            <img src={tcp} />
          </div>
        </div>
      </header>
      <header className={`codeutsava__navbar-hamburger ${isOpen?`hamburger-open`:``}`}>
        <div className="codeutsava__navbar-hamburger-body">
          <nav className="codeutsava__navbar-hamburger-nav">
            <div className="hamburger">
              <svg
                className="ham hamRotate ham8"
                viewBox="0 0 100 100"
                width="80"
                ref={hamburger}
                onClick = {toggleMenu}
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </div>
            <div className="codeutsava__navbar-hamburger-logo">
              <img src={codeutsava} />
            </div>
            <div className="codeutsava__navbar-hamburger-logo">
              <img src={tcp} />
            </div>
          </nav>
        </div>
        <ul className={`codeutsava__navbar-hamburger-navlist ${isOpen?`activeMenu slide-bottom`:``}`}>
              <li className="codeutsava__navbar-hamburger-navitem">
                <a href="#home"> 
                  <h3 className="codeutsava__navbar-hamburger-menu-heading">Home</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-hamburger-navitem">
                <a href="#aboutus">
                  <h3 className="codeutsava__navbar-hamburger-menu-heading">About Us</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-hamburger-navitem">
                <a href="#events">
                  <h3 className="codeutsava__navbar-hamburger-menu-heading">Events</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-hamburger-navitem">
                <a href="#speakers">
                  <h3 className="codeutsava__navbar-hamburger-menu-heading">Speakers</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-hamburger-navitem">
                <a href="#sponsers">
                  <h3 className="codeutsava__navbar-hamburger-menu-heading">Sponsors</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-hamburger-navitem">
                <a href="#faq">
                  <h3 className="codeutsava__navbar-hamburger-menu-heading">FAQ</h3>
                </a>
              </li>
              <li className="codeutsava__navbar-hamburger-navitem">
                <a href="#contactus">
                  <h3 className="codeutsava__navbar-hamburger-menu-heading">
                    Contact Us
                  </h3>
                </a>
              </li>
            </ul>
      </header>
    </div>
  );
};

export default Navbar;
