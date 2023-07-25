import React from 'react'
import '../styles/components/Navbar.css'
import '../styles/other/download-anchor.css'

export default function Navbar(props){
    return(
        <div style={{"boxShadow": `0px -10px 40px 1px ${props.navbarShadow}`}} className='navbar-container'>
            <h1 className='navbar-title'><a href='/'>Portfolio 📃</a></h1>
            <div className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li><a href='/'>Let's meet</a></li>
                    <li><a href='projects'>Projects</a></li>
                    <li>
                        <a className="download-anchor" href="/cv.pdf" download="resume_tymchenko">Download CV</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}