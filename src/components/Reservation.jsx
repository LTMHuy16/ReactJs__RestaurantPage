import restaurantImg from '../assets/restaurant2.jpg'

import { BsArrowRight } from 'react-icons/bs'

import styles from '../styles/Reservation.module.scss'



const Reservation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>

        <div className={styles.leftConner}>
          <div className={styles.description}>
            <div className={styles.title}>
              <span>Reservation</span>
              <h2>Make a Romantic Atmosphere here</h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint modi ea deleniti esse quae blanditiis fugiat vitae? Amet, architecto nesciunt.
            </p>
          </div>
        </div>

        <div className={styles.rightConner}>
          <div className={styles.formContainer}>
            <form>
              <div className={styles.imgContainer}>
                <img src={restaurantImg} alt="restaurant" />
              </div>
              <div className={styles.formInner}>
                <input type="text" placeholder='Name' className={styles.name} />
                <div className={styles.dataTime}>
                  <input type="date" className={styles.date} />
                  <input type="time" className={styles.time} />
                </div>
                <button className={styles.btn}>
                  <span>Book Now</span>
                  <BsArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reservation