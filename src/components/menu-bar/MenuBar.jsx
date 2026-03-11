import { useEffect, useState } from "react";
import styles from "./menuBar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const getElementVisibility = (id) => {
  const el = document.getElementById(id);
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
};

const useElementVisible = (id) => {
  const [visible, setVisible] = useState(() => getElementVisibility(id));

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return undefined;

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
  const logoVisible = useElementVisible("banner-logo");
  const heroVisible = useElementVisible("hero-section");

  return (
    <div
      className={`${styles.menuContainer} ${heroVisible ? styles.menuTransparent : ""}`}
    >
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src="/assets/logo.png"
          className={`${styles.menuLogo} ${logoVisible ? styles.menuLogoHidden : ""}`}
        />
      </Link>
      <ul className={styles.menuBar}>
        {menuItemList.map((item) => (
          <MenuItem key={item.href} {...item} />
        ))}
      </ul>
    </div>
  );
};

export const MenuBarMobile = () => {
  const logoVisible = useElementVisible("banner-logo");
  const heroVisible = useElementVisible("hero-section");
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="outer">
      <div
        className={`${styles.menuContainer} ${heroVisible ? styles.menuTransparent : ""}`}
      >
        <div className={styles.mobileMenuUpper}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="/assets/logo.png"
              className={`${styles.menuLogo} ${logoVisible ? styles.menuLogoHidden : ""}`}
            />
          </Link>
          <Menu onClick={() => setExpanded((a) => !a)} />
        </div>
        <div>
          {isExpanded && (
            <ul className={styles.menuBar}>
              {menuItemList.map((item) => (
                <MenuItem key={item.href} {...item} />
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
