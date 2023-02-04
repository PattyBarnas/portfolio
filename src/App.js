import React, { useCallback } from "react";
import Particle from "./components/Particles";
import MainNavigation from "./components/Navigation/MainNavigation";
import About from "./components/About/About";
import ContactForm from "./components/Contact/ContactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigation />
      </header>
      <section className="section-about">
        <About />
      </section>
      <section className="section-portfolio"></section>
      <section className="section-contact">
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
