import AboutUs from './components/AboutUs';
import Brand from './components/Brand';
import Facts from './components/Facts';
import Footer from './components/Footer';
import Home from './components/Home';
import Reservation from './components/Reservation';
import SpecialDishes from './components/SpecialDishes';
import Specialties from './components/Specialties';
import './styles/App.scss'


function App() {
  return (
    <div>
      <Home />
      <Brand />
      <Specialties />
      <AboutUs />
      <Facts />
      <SpecialDishes />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;