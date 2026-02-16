import { useEffect, useState } from "react";
import styles from "./menuBar.module.css";

const menuItemList = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#team",
    text: "The Team",
  },
  {
    href: "",
    text: "Dev Log",
  },
  {
    href: "",
    text: "Artbook",
  },
];

const MenuItem = ({ href, text }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
};

export const MenuBar = () => {
  const doc = document.documentElement;
  const [scrollState, setScrollState] = useState(0);
  document.addEventListener("scroll", () => {
    setScrollState(
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
    );
  });
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
    <div
      className={`${styles.menuContainer} ${scrollState < 100 ? styles.clear : ""}`}
    >
      <ul className={styles.menuBar}>
        {menuItemList.map((item) => (
          <MenuItem {...item} />
        ))}
      </ul>
    </div>
  );
};
