import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./trailer-section.module.css";
export const TrailerSection = () => {
  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "LtyPOjkhrtY";
  const maxResPoster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackPoster = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const [posterSrc, setPosterSrc] = useState(maxResPoster);

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
        <div className={styles.trailerFrame}>
          {isPlaying ? (
            <iframe
              className={styles.trailerVideo}
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Masterworks of Horror trailer"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className={styles.posterButton}
              onClick={() => setIsPlaying(true)}
              aria-label="Play Masterworks of Horror trailer"
            >
              <img
                src={posterSrc}
                alt="Masterworks of Horror trailer poster"
                className={styles.posterImage}
                onError={() => {
                  if (posterSrc !== fallbackPoster) setPosterSrc(fallbackPoster);
                }}
              />
              <span className={styles.playBadge} aria-hidden="true">
                Play Trailer
              </span>
            </button>
          )}
        </div>
        <div>
          <h3
            ref={headingRef}
            className={`${styles.copyHeading} ${animate ? styles.sweep : ""}`}
          >
            What is <br />
            Masterworks of Horror?
          </h3>
          <p className={styles.copyBody}>
            Masterworks of Horror is a real-time PvP card battler featuring the
            literary works of famous authors such as H.P. Lovecraft, Edgar Allan
            Poe, and many more.
          </p>
          <Link to="/authors" className={styles.authorsLink}>
            Meet the Authors &rsaquo;
          </Link>
        </div>
      </div>
    </div>
  );
};
