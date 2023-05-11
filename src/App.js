import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
// import Home from './Home';
// import About from './About';


const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        {/* <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;