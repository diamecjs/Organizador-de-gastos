import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Components/Landing/Landing"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
