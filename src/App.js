import React, { useCallback } from "react";
import Particle from "./components/Particles";
import MainNavigation from "./components/Navigation/MainNavigation";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigation />
      </header>
      <section className="section-about">
        <About />
      </section>
      <section className="section-technologies"></section>
      <section className="section-portfolio"></section>
    </div>
  );
}

export default App;
