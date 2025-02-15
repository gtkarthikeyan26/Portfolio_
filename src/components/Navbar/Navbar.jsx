import React, {useState} from "react";

import styles from "./Navbar.module.css"

import menuIcon from '../Navbar/menuIcon.png'
import menuClose from '../Navbar/menucloseimg.png'

export const Navbar = () =>{
    const[menuOpen, setMenuOpen] = useState(false);
    return (<nav className= {styles.navbar}>
        <a className = {styles.title} href = "/">Portfolio</a>
        <div className= {styles.menu}>
            <img 
            className= {styles.menuBtn} 
            src= {menuOpen 
                ? menuClose
                : menuIcon} 
            alt={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className= {`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
            onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>);
};