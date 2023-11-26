
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Signup from "./pages/simpleform"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./Routes/AuthPrivateRoutes"
import AboutUs from './pages/AboutUs';
import { useEffect } from 'react';
function App() {


  return (
    <div className="bg-slate-900 text-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Signup />} />
        <Route path="/aboutus" element={<PrivateRoute element={<AboutUs />} />} />
      </Routes>
    </div>




  );
}

export default App;
