import { useEffect, useRef, useState } from "react";
import styles from "./craft-section.module.css";
export const CraftSection = () => {
  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionInner}>
        <video
          autoPlay
          loop
          playsInline
          muted
          className={styles.trailerVideo}
        >
          <source src="/videos/card-viewer.mp4" type="video/mp4" />
        </video>
        <div>
          <h3
            ref={headingRef}
            className={`${styles.copyHeading} ${animate ? styles.sweep : ""}`}
          >Craft Your Own Story</h3>
          <p className={styles.copyBody}>
            Build your Masterwork (deck), choosing from history’s most iconic
            characters, settings, and authors. Blend the works of multiple
            authors to craft creative combos!
          </p>
        </div>
      </div>
    </div>
  );
};
