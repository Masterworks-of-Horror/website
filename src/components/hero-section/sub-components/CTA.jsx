import { useRef } from "react";
import { SiApple, SiGoogleplay, SiSteam } from "react-icons/si";
import styles from "./ctas.module.css";

export const StoreCtas = () => {
  const linkRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    linkRef.current.style.setProperty("--mx", `${x}px`);
    linkRef.current.style.setProperty("--my", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 3.6;
    const rotateX = ((centerY - y) / centerY) * 2.7;
    linkRef.current.style.transform = `perspective(600px) scale(1.04) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    linkRef.current.style.transform = "perspective(600px) scale(1) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className={styles.storeSection}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="speckle" colorInterpolationFilters="sRGB">
          {/* Fine stars */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="1"
            seed="7"
            result="fine"
          />
          <feComponentTransfer in="fine" result="fineStars">
            <feFuncR type="discrete" tableValues="0 0 0 0 0 0 0 0 0.8 1" />
            <feFuncG type="discrete" tableValues="0 0 0 0 0 0 0 0 0.85 1" />
            <feFuncB type="discrete" tableValues="0 0 0 0 0 0 0 0 1 1" />
            <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0.3 0.6" />
          </feComponentTransfer>
          {/* Bright stars */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="1"
            seed="15"
            result="bright"
          />
          <feComponentTransfer in="bright" result="brightStars">
            <feFuncR type="discrete" tableValues="0 0 0 0 0 0 0 0 0 1" />
            <feFuncG type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0.9" />
            <feFuncB type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0.7" />
            <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0.9" />
          </feComponentTransfer>
          <feGaussianBlur in="brightStars" stdDeviation="0.4" result="glowStars" />
          {/* Combine layers */}
          <feComposite in="glowStars" in2="fineStars" operator="over" result="combined" />
          <feComposite in="fineStars" in2="combined" operator="over" />
        </filter>
      </svg>
      <a
        ref={linkRef}
        href="https://store.steampowered.com/app/4436720/Masterworks_of_Horror_The_Prologue/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.steamLink}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className={styles.speckleLayer} />
        <SiSteam size={28} />
        <span>Wishlist Now on Steam</span>
      </a>
      <p className={styles.comingSoon}>
        Coming soon to
        <span className={styles.storeIcons}>
          <SiApple size={20} />
          <SiGoogleplay size={18} />
        </span>
      </p>
      <a href="/contact" className={styles.mailingListLink}>
        Join the Mobile Beta List &rsaquo;
      </a>
    </div>
  );
};
