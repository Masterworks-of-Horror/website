import { useEffect, useState } from "react";
import styles from "./menuBar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu, SoapDispenserDroplet } from "lucide-react";

const menuItemList = [
  {
    href: "#home",
    text: "About",
  },
  {
    href: "#team",
    text: "Meet the Authors",
  },
  {
    href: "",
    text: "Contact Us",
  },
];

const MenuItem = ({ href, text }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
};

export const MenuBarDesktop = () => {
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
    <div className={`${styles.menuContainer}`}>
      <img src="/assets/logo.png" className={styles.menuLogo} />
      <ul className={styles.menuBar}>
        {menuItemList.map((item) => (
          <MenuItem {...item} />
        ))}
      </ul>
    </div>
  );
};

export const MenuBarMobile = () => {
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

  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className="outer">
      <div className={`${styles.menuContainer} `}>
        <div className={styles.mobileMenuUpper}>
          <img src="/assets/logo.png" className={styles.menuLogo} />
          <Menu onClick={() => setExpanded((a) => !a)} />
        </div>
        <div>
          {isExpanded && (
            <ul className={styles.menuBar}>
              {menuItemList.map((item) => (
                <MenuItem {...item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export const MenuBar = () => {
  const isMobile = useWindowSize();
  return <>{isMobile ? <MenuBarMobile /> : <MenuBarDesktop />}</>;
};
