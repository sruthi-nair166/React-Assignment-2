import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <HeroSection />
      </main>
    </>
  );
}

export default App;
