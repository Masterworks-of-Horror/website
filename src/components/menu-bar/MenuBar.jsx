import { useEffect } from "react";
import styles from "./menuBar.module.css";
export const MenuBar = () => {
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
  return (
    <div className={styles.menuContainer}>
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
