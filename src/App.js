
import './App.css';
import First_display from './components/First_display';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {

  return (
    <div className="bg-slate-900 text-white ">
      <Navbar />
      <First_display />
      <Footer />
    </div>


  );
}

export default App;
