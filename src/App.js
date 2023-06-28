//other
import React from "react";
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
  return (
    <div className="App">
      <Navbar/>

        <BrowserRouter>
          <Routes>
            <Route index element={<Home title='Welcome!'/>} />
            <Route path="about" element={<About title='About'/>} />
            <Route path="projects" element={<Projects title='Projects'/>} />
            <Route path="*" element={<NotFound title='404'/>} />
          </Routes>
        </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
