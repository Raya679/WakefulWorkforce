import './App.css';
import AuthContextProvider from "./Context/AuthContext"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Signup from "./pages/signup"
import { Route, Routes } from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Questionnaire from './pages/questionnaire';
function App() {



  return (

    <div className="bg-slate-900 text-white ">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/login' element={<Signup login={true} />} />
          <Route path='/signup' element={<Signup login={false} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </AuthContextProvider>
    </div >

  );
}

export default App;