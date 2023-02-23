import "./MainNavigation.css";
import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <React.Fragment>
      <MainHeader>
        <div className="nav-bar">
          <p className="navigation-name">PB.</p>

          <nav>
            <NavLinks></NavLinks>
          </nav>
        </div>
      </MainHeader>
      <section>{/* <LandingPage /> */}</section>
    </React.Fragment>
  );
};
export default MainNavigation;
