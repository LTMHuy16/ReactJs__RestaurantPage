import styles from '../styles/Facts.module.scss'

const Facts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.facts}>
          <h4>20</h4>
          <span>Restaurant</span>
        </div>

        <div className={styles.facts}>
          <h4>9</h4>
          <span>Years Experiences</span>
        </div>

        <div className={styles.facts}>
          <h4>50+</h4>
          <span>Menu Dishes</span>
        </div>

        <div className={styles.facts}>
          <h4>250+</h4>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>
  )
}

export default Facts