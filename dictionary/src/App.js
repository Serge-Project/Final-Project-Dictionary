import React from "react";
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Homebox from "./Components/Homebox/Homebox";


function App() {
  return (
    <Router>
      <div className="container">
        
        {/* <Navbar /> */}
        <Routes>
          <Route path="/home" element={Home} />
          {/* <Route path="/Sign-up" component={home} /> */}
        </Routes>
       
      </div>
    </Router>
  );
}
export default App;
