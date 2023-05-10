import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Routes> */}
          {/* <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        {/* </Routes> */}
      </div>
    </Router>
  );
}

export default App;
