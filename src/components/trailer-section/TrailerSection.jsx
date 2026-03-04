import styles from "./trailer-section.module.css";
export const TrailerSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <img src="/assets/placeholder.png" className={styles.trailerVideo} />
      <div>
        <h3 className={styles.copyHeading}>What is Masterworks of Horror</h3>
        <p className={styles.copyBody}>
          Masterworks of Horror is a fast paced real time card game based off
          the literary works of famous authors such as H.P. Lovecraft, Edgar
          Allen Poe, and many more.
        </p>
      </div>
    </div>
  );
};
