/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import appFirebase from '../src/firebase/credentials'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Landing from "./Components/Landing/Landing";
import Login from '../src/Components/Login/Login'
import Profile from '../src/Components/Profile/Profile'
import { useState } from 'react';


const auth = getAuth(appFirebase)

function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (userFirebase) => {
   if(userFirebase){
     setUser(userFirebase)

     } else{
      setUser(null)
     } 
  })
  return (
    <>
    {user ? <Profile correoUsuario = {user.email} /> : <Login />}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
