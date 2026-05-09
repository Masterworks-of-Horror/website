import { useEffect, useRef, useState } from "react";
import styles from "./author-section.module.css";

export const AuthorSection = ({
  name,
  bio,
  variant,
  images = [],
  side = "left",
}) => {
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
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return undefined;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  const imagesEl = (
    <div className={styles.carousel}>
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt || name}
          className={`${styles.image} ${i === activeIndex ? styles.imageActive : ""}`}
          loading="lazy"
        />
      ))}
    </div>
  );

  const textEl = (
    <div className={styles.bioText}>
      <h3 className={styles.authorName}>{name}</h3>
      {bio.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${styles[variant]} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.bioGrid}>
        {side === "left" ? (
          <>
            {imagesEl}
            {textEl}
          </>
        ) : (
          <>
            {textEl}
            {imagesEl}
          </>
        )}
      </div>
    </section>
  );
};
