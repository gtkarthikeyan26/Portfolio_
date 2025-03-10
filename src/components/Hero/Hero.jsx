import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Hi, I'm Karthikeyan</h1>
        <p className={styles.description}>
          I'm a Software Developer with experience in HTML, CSS, JavaScript, React, MySQL.
          Reach out to me if you'd like to connect!
        </p>

        
        <a href="https://www.linkedin.com/in/gtrkarthikeyan/" className={styles.contactLink}>
          <button className={styles.contactBtn}>
            Contact me
            <div className={styles.hoverEffect}>
              <div></div>
            </div>
          </button>
        </a>
      </div>


    </section>
  );
};
