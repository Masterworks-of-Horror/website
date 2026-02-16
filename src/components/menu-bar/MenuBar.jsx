import { useEffect, useState } from "react";
import styles from "./menuBar.module.css";
export const MenuBar = () => {
  var doc = document.documentElement;
  const [scrollState, setScrollState] = useState(0);
  document.addEventListener("scroll", () => {
    setScrollState(
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
    );
  });
  console.log(document.body.scrollTop);
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  console.log(scrollState);
  return (
    <div
      className={`${styles.menuContainer} ${scrollState < 100 ? styles.clear : ""}`}
    >
      <ul className={styles.menuBar}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#team">Meet The Team</a>
        </li>
        <li>
          <a href="">Dev Log</a>
        </li>
        <li>
          <a href="">Artbook</a>
        </li>
      </ul>
    </div>
  );
};
