import React from 'react'
import styles from './Hero.module.css'
import Profilepic from '../Hero/Hero.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
            <div className={styles.content}>
            <h1>Hi, I'm Karthikeyan</h1>
            <p className={styles.description}>
                    I'm a Software Developer with experience in Html, Css, JavaScript, React, MySQL. 
                    Reach out to me if you'd like to connect!
                </p>
                <a href="https://www.linkedin.com/in//" className={styles.contactBtn}>Contact me</a>
            </div>
            <img src={Profilepic} alt="Image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
  )
}
