import { useEffect, useRef, useState } from "react";
import styles from "./menuBar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const useElementVisible = (id) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) {
      setVisible(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);
  return visible;
};

const menuItemList = [
  {
    href: "/authors",
    text: "Meet The Authors",
  },
  {
    href: "/contact",
    text: "Contact Us",
  },
];

const MenuItem = ({ href, text }) => {
  return (
    <li>
      <Link to={href}>{text}</Link>
    </li>
  );
};

export const MenuBarDesktop = () => {
  const doc = document.documentElement;
  const [scrollState, setScrollState] = useState(0);
  const logoVisible = useElementVisible("banner-logo");
  const heroVisible = useElementVisible("hero-section");
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
    <div className={`${styles.menuContainer} ${heroVisible ? styles.menuTransparent : ""}`}>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src="/assets/logo.png" className={`${styles.menuLogo} ${logoVisible ? styles.menuLogoHidden : ""}`} />
      </Link>
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
  const logoVisible = useElementVisible("banner-logo");
  const heroVisible = useElementVisible("hero-section");
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
      <div className={`${styles.menuContainer} ${heroVisible ? styles.menuTransparent : ""}`}>
        <div className={styles.mobileMenuUpper}>
          <Link to="/">
            <img src="/assets/logo.png" className={`${styles.menuLogo} ${logoVisible ? styles.menuLogoHidden : ""}`} />
          </Link>
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
