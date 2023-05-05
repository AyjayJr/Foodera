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
import Parallax from './components/Parallax';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Header />
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
