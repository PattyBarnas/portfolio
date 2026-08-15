import React from "react";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <p className="navigation-logo">PB.</p>
      <li>
        <a href="#section-about">About</a>
      </li>
      {/* <li>
        <a href="#section-tech">Skills</a>
      </li> */}
      <li>
        <a href="#section-projects">Projects</a>
      </li>

      <li>
        <a href="#section-contact">Contact</a>
      </li>
    </ul>
  );
};
export default NavLinks;
