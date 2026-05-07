import { useEffect, useState } from "react";
import styles from "./menuBar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router";
import { SiDiscord, SiInstagram } from "react-icons/si";

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

const socialList = [
  {
    href: "https://discord.gg/xNx8DTGu36",
    label: "Discord",
    Icon: SiDiscord,
  },
  {
    href: "https://www.instagram.com/masterworksgame/",
    label: "Instagram",
    Icon: SiInstagram,
  },
];

const MenuItem = ({ href, text }) => {
  return (
    <li>
      <Link to={href}>{text}</Link>
    </li>
  );
};

const SocialItem = ({ href, label, Icon }) => {
  return (
    <li className={styles.socialItem}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon size={22} />
      </a>
    </li>
  );
};

export const MenuBarDesktop = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const logoVisible = useElementVisible("banner-logo");
  const heroVisible = useElementVisible("hero-section");

  return (
    <div
      className={`${styles.menuContainer} ${isHome && heroVisible ? styles.menuTransparent : ""}`}
    >
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src="/assets/logo.png"
          className={`${styles.menuLogo} ${isHome && logoVisible ? styles.menuLogoHidden : ""}`}
        />
      </Link>
      <div className={styles.menuRight}>
        <ul className={styles.menuBar}>
          {menuItemList.map((item) => (
            <MenuItem key={item.href} {...item} />
          ))}
        </ul>
        <ul className={styles.socialBar}>
          {socialList.map((item) => (
            <SocialItem key={item.href} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const MenuBarMobile = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const logoVisible = useElementVisible("banner-logo");
  const heroVisible = useElementVisible("hero-section");
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="outer">
      <div
        className={`${styles.menuContainer} ${isHome && heroVisible ? styles.menuTransparent : ""} ${isExpanded ? styles.menuExpanded : ""}`}
      >
        <div className={styles.mobileMenuUpper}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="/assets/logo.png"
              className={`${styles.menuLogo} ${isHome && logoVisible ? styles.menuLogoHidden : ""}`}
            />
          </Link>
          <Menu onClick={() => setExpanded((a) => !a)} />
        </div>
        <div>
          {isExpanded && (
            <>
              <ul className={styles.menuBar}>
                {menuItemList.map((item) => (
                  <MenuItem key={item.href} {...item} />
                ))}
              </ul>
              <ul className={styles.socialBar}>
                {socialList.map((item) => (
                  <SocialItem key={item.href} {...item} />
                ))}
              </ul>
            </>
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
