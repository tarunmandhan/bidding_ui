import React from "react";
import "./Header.css";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <img
                src="/src/assets/img/Tlogo2.png"
                alt="logo img"
                width="41px"
              />
            </div>
            <div className="menu-icon btn" onClick={handleShowNavbar}>
              <HiMenuAlt3 />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
