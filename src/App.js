import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Stats from './components/Stats';
import About from './components/About';
import Banner from './components/Banner';
import Meals from './components/Meals';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Parallax from './components/Parallax';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import ModalMenu from './components/ModalMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(prevState => { return !prevState; });
    console.log(isMenuOpen);
  }

  return (
    <div>
      {isMenuOpen && <ModalMenu onClick={menuHandler} />}
      <Header onClick={menuHandler} />
      <Showcase />
      <Stats />
      <About />
      <Banner />
      <Meals />
      <Testimonials />
      <Faq />
      <Parallax />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
