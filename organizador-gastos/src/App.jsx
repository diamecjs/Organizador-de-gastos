import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Components/Landing/Landing";
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';


function App() {


  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;