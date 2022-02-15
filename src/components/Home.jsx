import Navbar from './Navbar';

import { BsArrowRight } from 'react-icons/bs'

import eatingImg from '../assets/eating.jpg'

import styles from '../styles/Home.module.scss'


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <Navbar />
      </div>

      <div className={styles.bg1}>
        <div className={styles.photo1}>
          <div className={styles.photoContainer}>
            <img src={eatingImg} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.slogan}>
        <h1>Feel the Authentic 	&amp; Original Taste form Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur ad maiores consectetur, deserunt ullam accusamus enim animi dolores.
        </p>
        <button className={styles.btn}>
          <span>See More</span>
          <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Home;
