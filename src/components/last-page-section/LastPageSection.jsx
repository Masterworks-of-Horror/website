import { useEffect, useRef, useState } from "react";
import { LAST_PAGE_URL } from "../../siteLinks";
import styles from "./last-page-section.module.css";

// The studio's next game. Same section shape as the rest of the home page;
// the link goes to its own site.
export const LastPageSection = () => {
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
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionInner}>
        <a
          href={LAST_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.coverLink}
          aria-label="Masterworks: The Last Page website"
        >
          <img
            src="/assets/last-page-cover.jpg"
            alt="Masterworks: The Last Page. Pulp cover: Dracula and the Torn Page"
            className={styles.cover}
            loading="lazy"
          />
        </a>
        <div>
          <p className={styles.kicker}>Our next game</p>
          <h3
            ref={headingRef}
            className={`${styles.copyHeading} ${animate ? styles.sweep : ""}`}
          >
            Masterworks:
            <br />
            The Last Page
          </h3>
          <p className={styles.copyBody}>
            A folio card-RPG, in development for Windows, Mac and Linux. Six
            legends, from Captain Ahab to Sherlock Holmes, have each found the
            final page of their own story. One book of ten pages is the whole
            character, and the same card answers a fight, a locked road, and a
            conversation. No dice.
          </p>
          <a
            href={LAST_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
          >
            Visit The Last Page &rsaquo;
          </a>
        </div>
      </div>
    </div>
  );
};
