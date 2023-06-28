//other
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import './App.css';

//components
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

//pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

function App() {
  
  const [navbarShadow, setNavbarShadow] = useState(null)

  return (
    <div className="App">
      <Navbar navbarShadow={navbarShadow}/>

        <BrowserRouter>
          <Routes>
            <Route index element={<Home title='Welcome!' setNavbarShadow={setNavbarShadow}/>} />
            <Route path="about" element={<About title='About' setNavbarShadow={setNavbarShadow}/>} />
            <Route path="projects" element={<Projects title='Projects' setNavbarShadow={setNavbarShadow}/>} />
            <Route path="*" element={<NotFound title='404' setNavbarShadow={setNavbarShadow}/>} />
          </Routes>
        </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
