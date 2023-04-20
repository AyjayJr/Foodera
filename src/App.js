import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Stats from './components/Stats';
import About from './components/About';
import Banner from './components/Banner';
import Meals from './components/Meals';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Faq from './components/Faq';

function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <Stats />
      <About />
      <Banner />
      <Meals />
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
