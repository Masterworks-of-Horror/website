import styles from "./battle-section.module.css";
export const BattleSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <video
        autoPlay
        loop
        playsInline
        muted
        controls
        className={styles.trailerVideo}
      >
        <source src={"/videos/battle.mp4"} type="video/mp4" />
      </video>
      <div>
        <h3 className={styles.copyHeading}>Battle Your Foes</h3>
        <p className={styles.copyBody}>
          {`Battle Your Foes Test your creations in literary battles. Will you defeat others or meet your demise?`}
        </p>
      </div>
    </div>
  );
};
