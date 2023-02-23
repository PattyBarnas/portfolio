import React, { useState } from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import About from "./components/About/About";
import ContactForm from "./components/Contact/ContactForm";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Icons from "./components/About/Icons";
import BackgroundVideo from "./components/Landing/BackgroundVideo";
import LandingPage from "./components/Landing/LandingPage";

function App() {
  return (
    <div className="App">
      <header className="header-app">
        <BackgroundVideo />
        <MainNavigation />
        <LandingPage />
      </header>

      <section id="section-about" className="section-about">
        <About />
      </section>
      <section id="section-tech" className="section-tech">
        <Icons />
      </section>
      <section id="section-projects" className="section-projects">
        <Projects />
      </section>
      <section id="section-contact" className="section-contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
