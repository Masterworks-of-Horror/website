import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HeroSection } from "./components/old/hero-section/HeroSection";
import { MenuBar } from "./components/old/menu-bar/MenuBar";
import { TeamCarousel } from "./components/old/team-carousel/TeamCarousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MenuBar />
        <HeroSection />
        <TeamCarousel />
      </div>
    </>
  );
}

export default App;
