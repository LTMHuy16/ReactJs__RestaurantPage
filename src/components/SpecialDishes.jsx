import styles from '../styles/SpecialDishes.module.scss'


const Dish = ({ name, price, description }) => (
  <div className={styles.dishesContainer}>
    <div className={styles.dishes}>
      <h4 className={styles.name}>{name}</h4>
      <span className={styles.price}>{price}</span>
    </div>
    <p>{description}</p>
  </div>
)


const SpecialDishes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Special Dishes</span>
        <h2>Best Recommend of Menu</h2>
      </div>

      <div className={styles.dishes}>
        <div className={styles.dishesList}>
          <Dish 
            name='Beef Burger'
            price='32'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit.'
          />

          <Dish 
            name='ITALIAN PIZZA'
            price='10'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit.'
          />

          <Dish 
            name='GREEK GYRO'
            price='20'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit.'
          />

          <Dish 
            name='VIETNAMESE SPRING ROLLS'
            price='18'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit.'
          />

          <Dish 
            name='VIETNAMESE SPRING ROLLS'
            price='18'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit.'
          />

          <Dish 
            name='VIETNAMESE SPRING ROLLS'
            price='18'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit.'
          />
        </div>
      </div>
    </div>
  )
}

export default SpecialDishes