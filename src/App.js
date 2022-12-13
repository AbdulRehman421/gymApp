import Header from './components/Header'
import './App.css';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Trainers from './components/Trainers';
import Program from './components/Program';
import Bills from './components/Bills';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-orange-50 
     transition-all duration-75 ">
      <Header />
      <Hero />
      <Brands />
      <Trainers />
      <Program />
      <Bills />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
