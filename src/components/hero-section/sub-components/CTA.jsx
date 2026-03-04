import { Link } from "react-router";
import styles from "./ctas.module.css";
export const IosCta = () => {
  return (
    <Link to="/contact">
      <div className={styles.container} style={{ marginRight: 28 }}>
        <img src="/assets/ios.png" height={40} />
      </div>
    </Link>
  );
};

export const GooglePlayCTA = () => {
  return (
    <Link to="/contact">
      <div className={styles.container} style={{ marginRight: 28 }}>
        <img src="/assets/gplay.png" height={40} />
      </div>
    </Link>
  );
};
