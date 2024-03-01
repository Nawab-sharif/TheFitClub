import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Program from './Components/Program';
import Reasons from './Components/Reasons';
import Plans from './Components/Plans';
import Testimonials from './Components/Testimonials';
import Join from './Components/Join';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
          {/* <Header/> */}
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;