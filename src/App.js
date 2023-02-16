import React from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Experience from "./components/Experience";

import {
  
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <div>

      <NavBar />
<Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/skills" element={<Skills />}>
          </Route>
          <Route path="/Experience" element={<Experience />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
</Routes>

        
      
    </div>
  );
}

export default App;