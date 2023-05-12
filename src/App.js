import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//COMPONENTS
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import './App.css'

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
// import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App(){
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/footwares/new" element={<New />} />
          <Route path="/footwares/:id" element={<Show />} />
          <Route path="/footwares/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;