import styles from "../teamCarousel.module.css";
export const TeamPortrait = ({ name, position, flavor }) => {
  return (
    <div className={styles.teamPortrait}>
      <img src={`src/assets/headshots/${name}.jpg`} />
      <p className={styles.portraitName}>{name}</p>
      <p className={styles.portraitPosition}>{position}</p>
      <p className={styles.portraitFlavor}>{flavor}</p>
    </div>
  );
};
