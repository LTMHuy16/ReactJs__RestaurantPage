import styles from '../styles/AboutUs.module.scss'

import bgImg from '../assets/bg1.jpg'
import restaurantImg from '../assets/restaurant.jpg'



const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg1}>
        <img src={bgImg} alt="bg-1" />
      </div>

      <div className={styles.restaurant}>
        <img src={restaurantImg} alt="" />
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <h3>We Are Service You Better</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam possimus nulla sapiente esse placeat?
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs