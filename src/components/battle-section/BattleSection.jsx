import { useEffect, useRef, useState } from "react";
import styles from "./battle-section.module.css";
export const BattleSection = () => {
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
      <video
        autoPlay
        loop
        playsInline
        muted
        className={styles.trailerVideo}
      >
        <source src={"/videos/battle.mp4"} type="video/mp4" />
      </video>
      <div>
        <h3
          ref={headingRef}
          className={`${styles.copyHeading} ${animate ? styles.sweep : ""}`}
        >Battle Your Foes</h3>
        <p className={styles.copyBody}>
          {`Battle your foes and Test your creations in Literary Battles.`}
          <br />
          {`Will you defeat others or meet your demise?`}
        </p>
      </div>
    </div>
  );
};
