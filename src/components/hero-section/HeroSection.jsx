import styles from "./hero-section.module.css";
import { StoreCtas, MobileCtas } from "./sub-components/CTA";

export const HeroSection = () => {
  return (
    <div id="hero-section" className={styles.hero}>
      <img src="/assets/bg.png" className={styles.bg} alt="" />
      <img src="/assets/lhs.png" className={styles.lhs} alt="" />
      <img src="/assets/rhs.png" className={styles.rhs} alt="" />
      <div className={styles.center}>
        <img
          id="banner-logo"
          src="/assets/banner-logo.png"
          className={styles.bannerLogo}
          alt="Masterworks of Horror"
        />
        <img src="/assets/monster.png" className={styles.monster} alt="" />
        <img src="/assets/cards.png" className={styles.cards} alt="" />
      </div>
      <div className={styles.ctasSteam}>
        <StoreCtas />
      </div>
      <div className={styles.ctasMobile}>
        <MobileCtas />
      </div>
    </div>
  );
};
