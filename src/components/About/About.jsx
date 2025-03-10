import React from "react";
import styles from './About.module.css'
import Image1 from '../About/aboutImage.png'
import Image2 from '../About/cursorIcon.png'
import Image3 from '../About/dbIcon.png'

export const About = () => {
return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src= {Image1} alt='Me working'
            className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                        <img src={Image2} 
                        alt='cursor Icon'
                        />
                        <h3>Web Developer</h3>
                        <p>
                        I'm a Web Developer with an understanding and creating designs and templates using CSS and Figma   
                        </p>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={Image3} 
                        alt='server Icon'
                        />
                        <h3>Software Developer</h3>
                        <p>
                            I'm a Software Developer with experience in building scalable and optimized applicatiions
                        </p>
                    </li>
                    
            </ul>
        </div>
    </section>
  )
}
