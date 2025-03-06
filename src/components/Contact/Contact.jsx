import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>KARTHIKEYAN</h2>
        <p>A Frontend Web Developer passionate about creating responsive, user-friendly websites and web applications that enhance user experience and contribute to the success of the product.</p>
      </div>
      <div className={styles.social}>
        <h3>Connect Here</h3>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/gtrkarthikeyan/">
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/gtkarthikeyan26">
              <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="mailto:gtrkarthikeyan@gmail.com">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerNote}>
        <p>Made by <span>T.KARTHIKEYAN</span></p>
      </div>
    </footer>
    
  )
}