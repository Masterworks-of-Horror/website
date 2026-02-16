import styles from "./teamCarousel.module.css";
import { TeamPortrait } from "./sub-components/Portrait";
import { teamData } from "./data/teamData";
export const TeamCarousel = () => {
  return (
    <section id="team">
      <div className={styles.parentContainer}>
        <h2 className={styles.heading}>Meet the Team</h2>
        <div className={styles.teamCarousel}>
          {teamData.map((member) => TeamPortrait(member))}
        </div>

        <img src="src/assets/victor-left.png" className={styles.imageLeft} />
        <img src="src/assets/poe-right.png" className={styles.imageRight} />
      </div>
    </section>
  );
};
