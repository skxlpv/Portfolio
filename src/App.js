//other
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import './App.css';

//components
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

//pages
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from "./pages/Resume";
import NotFound from './pages/NotFound'

function App() {
  
  const [navbarShadow, setNavbarShadow] = useState(null)

  return (
    <div className="App">
      <Navbar navbarShadow={navbarShadow}/>
        <BrowserRouter>
          <Routes>
            <Route index element={<About title='Let`s meet!' setNavbarShadow={setNavbarShadow}/>} />
            <Route path="projects" element={<Projects title='Projects' setNavbarShadow={setNavbarShadow}/>} />
            <Route path="resume" element={<Resume title='Resume' setNavbarShadow={setNavbarShadow}/>} />
            <Route path="*" element={<NotFound title='404' setNavbarShadow={setNavbarShadow}/>} />
          </Routes>
        </BrowserRouter>
      <Footer navbarShadow={navbarShadow}/>
    </div>
  );
}

export default App;
