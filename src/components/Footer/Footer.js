import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/pattybarnas">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
      <div>
        <a href="mailto:patrykbarnas@yahoo.com">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/patryk-barnas-768405221/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
