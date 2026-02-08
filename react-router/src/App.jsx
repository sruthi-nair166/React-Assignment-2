import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/*<HeroSection />*/}
        <AboutSection />
      </main>
    </>
  );
}

export default App;
