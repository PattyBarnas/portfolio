import "./MainNavigation.css";
import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import LandingPage from "../Landing/LandingPage.js";

const MainNavigation = () => {
  return (
    <React.Fragment>
      <MainHeader>
        <p className="navigation-name">PB.</p>
        <nav>
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
      <section>
        <LandingPage />
      </section>
    </React.Fragment>
  );
};
export default MainNavigation;
