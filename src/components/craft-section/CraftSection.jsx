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
          {`Build and customize your masterwork. `}
          <br />
          {`Choose from some of history’s most
           iconic characters, settings, and authors.`}
        </p>
      </div>
    </div>
  );
};
