import { useEffect, useRef, useState } from "react";
import styles from "./trailer-section.module.css";
export const TrailerSection = () => {
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
      <img src="/assets/placeholder.png" className={styles.trailerVideo} />
      <div>
        <h3
          ref={headingRef}
          className={`${styles.copyHeading} ${animate ? styles.sweep : ""}`}
        >What is <br />Masterworks of Horror</h3>
        <p className={styles.copyBody}>
          Masterworks of Horror is a fast paced real time card game based off
          the literary works of famous authors such as H.P. Lovecraft, Edgar
          Allen Poe, and many more.
        </p>
      </div>
    </div>
  );
};
