import styles from "./hero-section.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.herosectionContainer} id="home">
      <div className={styles.floatingContainer}>
        <img src="/assets/logo.png" />
        <p>
          Bring your favorite stories to life using the works of legendary
          horror authors and become the genre’s greatest wordsmith in
          Masterworks of Horror: Lovecraft’s Gambit. Collect cards and build
          fully customizable decks of literary mash-ups to best your opponent in
          this real-time card game battler.
        </p>
        <p>
          Do you have what it takes to embody horror’s most celebrated authors
          and create your own Masterwork?
        </p>
        <img src="/assets/steam-cta.png" />
      </div>
    </section>
  );
};
