import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./hero-section.module.css";
import { GooglePlayCTA, IosCta } from "./sub-components/CTA";
export const HeroSectionDesktop = () => {
  return (
    <div className={styles.heroContainer}>
      <img src="/assets/lovecraft.png" className={styles.authorImage} />
      <div className={styles.midSection}>
        <img src="/assets/logo.png" />
        <div></div>
        <p className={styles.signUp}>Sign Up for Beta Now</p>
        <div className={styles.ctas}>
          <img src="/assets/steam-cta.png" className={styles.ctaLogo} />
          <IosCta />
          <GooglePlayCTA />
        </div>
      </div>
      <img src="/assets/poe.png" className={styles.authorImage} />
    </div>
  );
};

export const HeroSectionMobile = () => {
  return (
    <div className={styles.heroContainer}>
      <img src="/assets/logo.png" className={styles.heroLogo} />
      <div className={styles.imageContainer}>
        <img src="/assets/lovecraft.png" className={styles.authorImageLeft} />
        <img src="/assets/poe.png" className={styles.authorImageRight} />
      </div>
      <div>
        <p className={styles.signUp}>Sign Up for Beta Now</p>
        <div className={styles.ctas}>
          <img src="/assets/steam-cta.png" className={styles.ctaLogo} />
          <IosCta />
          <GooglePlayCTA />
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const isMobile = useWindowSize();
  return <>{isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}</>;
};
