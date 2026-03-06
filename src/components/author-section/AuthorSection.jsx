import { useEffect, useRef, useState } from "react";
import styles from "./author-section.module.css";

export const AuthorSection = ({ name, portrait, bio, variant }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${styles[variant]} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.bioGrid}>
        <div className={styles.portraitWrap}>
          <img src={portrait} alt={name} className={styles.portrait} />
        </div>
        <div className={styles.bioText}>
          <h3 className={styles.authorName}>{name}</h3>
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
