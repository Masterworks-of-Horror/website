import styles from "./craft-section.module.css";
export const CraftSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <video
        autoPlay
        loop
        playsInline
        controls
        muted
        className={styles.trailerVideo}
      >
        <source src="/videos/card-viewer.mp4" type="video/mp4" />
      </video>
      <div>
        <h3 className={styles.copyHeading}>Craft Your Own Story</h3>
        <p className={styles.copyBody}>
          {`Build and customize your masterwork. Choose from some of history’s
          most iconic characters, settings, and authors.`}
        </p>
      </div>
    </div>
  );
};
