import { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'

import styles from '../styles/Navbar.module.scss'


const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>Food Heaven</span>
      </div>

      <div 
        className={styles.mobileBars}
        onClick={() => setIsNavOpen(true)}
      >
        <FaBars />
      </div>

      <ul className={`${styles.menu} ${isNavOpen ? styles.menuMobileActive : undefined}`}>
        <li
          className={styles.mobileFatimes}
          onClick={() => setIsNavOpen(false )}
        >
          <FaTimes />
        </li>
        <li>Home</li>
        <li>Our Menu</li>
        <li>News</li>
        <li>More</li>
      </ul>
    </nav>
  )
}

export default Navbar;
