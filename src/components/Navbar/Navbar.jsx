import React, { useState } from "react";
import styles from "./Navbar.module.css";

import menuIcon from "../Navbar/menuIcon.png";
import menuClose from "../Navbar/menucloseimg.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        {!menuOpen && (
          <img
            className={styles.menuBtn}
            src={menuIcon}
            alt="Open menu"
            onClick={() => setMenuOpen(true)}
          />
        )}
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          {menuOpen && (
            <img
              className={styles.closeBtn}
              src={menuClose}
              alt="Close menu"
              onClick={() => setMenuOpen(false)}
            />
          )}
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
