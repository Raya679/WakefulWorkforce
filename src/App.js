
import './App.css';
import First_display from './components/First_display';

import Fourth_display from './components/Fourth_display';

import Navbar from './components/Navbar';
import Second_display from './components/Second_display';
import Third_display from './components/Third_display';
import Footer from './components/Footer';
function App() {

  return (
    <div className="bg-slate-900 text-white ">
      <Navbar />
      <First_display />
      <Second_display/>
      <Third_display/>
      <Fourth_display/>
      <Footer/>
    </div>


  );
}

export default App;
