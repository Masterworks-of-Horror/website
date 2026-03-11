import "./App.css";
import { HeroSection } from "./archive/old/hero-section/HeroSection";
import { MenuBar } from "./components/menu-bar/MenuBar";
import { TeamCarousel } from "./archive/old/team-carousel/TeamCarousel";

function App() {
  return (
    <div>
      <MenuBar />
      <HeroSection />
      <TeamCarousel />
    </div>
  );
}

export default App;
