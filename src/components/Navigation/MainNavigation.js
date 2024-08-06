import "./MainNavigation.css";
import React, { useState } from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "../UIElements/SideDrawer";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClose={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks></NavLinks>
        </nav>
      </SideDrawer>
      <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
        <span className="phone-menu-btn" />
        <span className="phone-menu-btn" />
        <span className="phone-menu-btn" />
      </button>
      <MainHeader>
        <div className="nav-bar">
          <p className="navigation-name">PB.</p>

          <nav className="main-navigation__header-nav">
            <NavLinks></NavLinks>
          </nav>
        </div>
      </MainHeader>
    </React.Fragment>
  );
};
export default MainNavigation;
