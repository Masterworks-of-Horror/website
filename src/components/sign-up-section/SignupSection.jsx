import styles from "./signup.module.css";
export const SignupSection = () => {
  return (
    <div className={styles.signupContainer}>
      <h3>Join the Battle</h3>
      <div className={styles.optionsSection}>
        <div>
          <img src="/assets/steam-banner.png" className={styles.ctaBanner} />
          <div className={styles.ctaContainer}>
            <p>Steam Wishlist</p>
          </div>
        </div>
        <div>
          <img src="/assets/necro.png" className={styles.ctaBanner} />
          <div className={styles.ctaContainer}>
            <p>Beta Mailing List</p>
          </div>
        </div>
      </div>
    </div>
  );
};
