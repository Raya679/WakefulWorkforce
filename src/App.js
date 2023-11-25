
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from "./simpleform"
import { Route, Routes } from "react-router-dom"
function App() {

  return (

    <div className="bg-slate-900 text-white ">
      <Navbar />
      {/* <Homepage /> */}
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Login />} />
      </Routes>
    </div>




  );
}

export default App;
