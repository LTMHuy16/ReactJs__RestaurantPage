import { ReactComponent as Western } from '../assets/food/western.svg'
import { ReactComponent as Japan } from '../assets/food/japan.svg'
import { ReactComponent as Korean } from '../assets/food/korean.svg'
import { ReactComponent as Eastern } from '../assets/food/eastern.svg'

import styles from '../styles/Specialties.module.scss'


const FoodCard = ({ foodIcon, ctg, description }) => (
  <div className={styles.cardContainer}>
    <div className={styles.iconContainer}>
      {foodIcon}
    </div>
    <h2>{ctg}</h2>
    <p>{description}</p>
  </div>
)

const Specialties = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Specialties</span>
        <h2>Our Specialties Cuisine</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.row1}>
          <FoodCard 
            foodIcon={<Western />}
            ctg='Western'
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quod?"
          />

          <FoodCard 
            foodIcon={<Japan />}
            ctg='Japan'
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quod?"
          />
        </div>
        <div className={styles.row2}>
          <FoodCard 
            foodIcon={<Korean />}
            ctg='Korean'
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quod?"
          />

          <FoodCard 
            foodIcon={<Eastern />}
            ctg='Eastern'
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quod?"
          />
        </div>
      </div>
    </div>
  )
}

export default Specialties