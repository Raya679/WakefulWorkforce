// import './App.css';
import AuthContextProvider from "./Context/AuthContext"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ContactUs from './pages/ContactUs';
import Signup from "./pages/signup"
import Todo from "./pages/todo"
import { Route, Routes } from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Questionnaire from './pages/questionnaire';
import Dashboard from './pages/dashboard';
import CalendarPage from "./pages/CalendarPage";
import DateContextProvider from "./Context/DateContext";
import Profile from "./pages/profile";
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen min-w-full">
      <AuthContextProvider>
        <DateContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/login' element={<Signup login={true} />} />
            <Route path='/signup' element={<Signup login={false} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DateContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
