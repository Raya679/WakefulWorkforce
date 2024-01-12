import './App.css';
import AuthContextProvider from "./Context/AuthContext"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ContactUs from './components/ContactUs';
import Signup from "./pages/signup"
import { Route, Routes } from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Questionnaire from './pages/questionnaire';
function App() {



  return (

    <div className="bg-slate-900 text-white min-h-screen ">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/login' element={<Signup login={true} />} />
          <Route path='/signup' element={<Signup login={false} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </AuthContextProvider>
    </div >

  );
}

export default App;
