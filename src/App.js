import React, { useEffect, useMemo, useRef, useState } from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import About from "./components/About/About";
import ContactForm from "./components/Contact/ContactForm";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigation />
      </header>
      <section className="section-about">
        <About />
      </section>
      <section className="section-projects">
        <Projects />
      </section>
      <section className="section-contact">
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
