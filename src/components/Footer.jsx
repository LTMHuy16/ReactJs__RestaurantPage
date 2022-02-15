import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>Food</span>
        <span className={styles.copyRight}>
          &copy; CopyRight Food. All rights reserved
        </span>
      </div>

      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li className={styles.socials}>
          Get in Touch
          <ul className={styles.socialsContainer}>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}

export default Footer