import { BattleSection } from "../components/battle-section/BattleSection";
import { CraftSection } from "../components/craft-section/CraftSection";
import { HeroSection } from "../components/hero-section/HeroSection";
import { MenuBar } from "../components/menu-bar/MenuBar";
import { TrailerSection } from "../components/trailer-section/TrailerSection";
export const HomePage = () => {
  return (
    <>
      <div>
        <MenuBar />
        <HeroSection />
        <TrailerSection />
        <CraftSection />
        <BattleSection />
      </div>
    </>
  );
};
