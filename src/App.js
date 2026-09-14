import React from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import About from "./components/About/About";
import ContactForm from "./components/Contact/ContactForm";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import BackgroundVideo from "./components/Landing/BackgroundVideo";
import LandingPage from "./components/Landing/LandingPage";
import Skills from "./components/Skills/Skills";
import FrequentlyAskedQuestions from "./components/Faqs/FrequentlyAskedQuestions";

function App() {
  return (
    <div className="App">
      <header className="header-app">
        <MainNavigation />
        <BackgroundVideo />
        <LandingPage />
      </header>
      <section>
        <h3>CTA GET IN TOUCH</h3>
        <p>TESTING</p>
      </section>
      <section id="section-projects" className="section-projects">
        <Projects />
      </section>

      <section id="section-about" className="section-about">
        <About />
        <Skills />
      </section>

      <section id="section-contact" className="section-contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
