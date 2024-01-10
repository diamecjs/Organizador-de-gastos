import { Routes, Route } from 'react-router-dom';
import Landing from "./Components/Landing/Landing";
import Login from './Components/Login/Login'
import { Profile } from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register'
import { AuthProvider } from './Components/Context/AuthContext';
import MyExpenses from './Components/MyExpenses/MyExpenses';



function App() {


  return (
    <>

      <AuthProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/expenses" element={<MyExpenses />} />
        </Routes>
      </AuthProvider>

      <Footer />
    </>
  );
}

export default App;