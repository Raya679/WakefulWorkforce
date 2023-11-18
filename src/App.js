
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
function App() {

  return (
    <div className="bg-slate-900 text-white ">
      <Navbar />
     <Homepage/>
      <Footer />
    </div>


  );
}

export default App;
